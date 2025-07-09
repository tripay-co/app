import { useForm } from "react-hook-form"
import { forgotPasswordSchema, type ForgotPasswordRequest } from "../schema/forgot-password-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { recoverPasswordService } from "@/infra/services/recover-password"
import { toast } from "sonner"
import type { RecoverPassword } from "@/domain/repositories/recover-password"


export const useForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordRequest>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onBlur',
    defaultValues: {
      email: ''
    }
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['forgot-password'],
    mutationFn: async (data: ForgotPasswordRequest) => {
      const apiResponse = await recoverPasswordService.recover(data)

      return apiResponse
    },
    onMutate: () => {
      const toastId = toast("Enviando e-mail...")

      return { toastId }
    },
    onSuccess: (_data: RecoverPassword.Model, _variables, context) => {
      if (context?.toastId) {
        toast.success('E-mail enviado com sucesso!', { id: context.toastId })
      }
      form.reset()
    },
    onError: (error, _variables, context) => {
      if (context?.toastId) {
        toast.error('Falha ao enviar e-mail.', { id: context.toastId })
      }
      form.reset()
    }
  })

  return {
    form,
    isLoading: isPending,
    onSubmit: mutate
  }
}