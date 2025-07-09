import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useSendMessageModalStore } from "../store/send-message-store"
import { sendMessageCommercialEstablishmentService } from "@/infra/services/send-message-commercial-establishment"
import { useAuth } from "@/react/context/authentication"


export const sendMessageSchema = z.object({
   title: z.string({ required_error: "Título é obrigatório"}).min(1, "Título é obrigatório"),
   message: z.string({ required_error: "Mensagem é obrigatória"}).min(1, "Mensagem é obrigatória"),
})

export type SendMessageFormType = z.infer<typeof sendMessageSchema>

export function useSendMessage() {
   const { close, phone } = useSendMessageModalStore()
   const { getToken } = useAuth()

   const form = useForm<SendMessageFormType>({
      resolver: zodResolver(sendMessageSchema),
      defaultValues: {
         title: "",
         message: "",
      },
      mode: "onBlur",
      reValidateMode: "onChange",
   })

   const { mutate } = useMutation({
      mutationKey: ["sendMessage"],
      mutationFn: async (data: SendMessageFormType) => {
         const apiResponse = await sendMessageCommercialEstablishmentService.send({
            title: data.title,
            message: data.message,
            phone: phone!,
            token: getToken()!
         })

         return apiResponse
      },
      onMutate: () => {
         const toastId = toast("Enviando mensagem...")

         return { toastId }
      },
      onSuccess: (_data, _variables, context) => {
         if (context?.toastId) {
            toast.success('Mensagem enviada com sucesso!', { id: context.toastId })
         }

         close()
         form.reset()
      },
      onError: (error, _variables, context) => {
         if (context?.toastId) {
            toast.error('Falha ao enviar mensagem.', { id: context.toastId })
         }

      }
   })

   return {
      form,
      onSubmit: mutate
   }
}