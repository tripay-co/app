import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import type { RecoverPassword } from "@/domain/repositories/recover-password"
import { resetPasswordSchema, type ResetPasswordRequest } from "../schema/reset-password-schema"
import { useNavigate, useSearchParams } from "react-router-dom"
import { PATHS } from "@/presentation/app/paths"
import { resetPasswordService } from "@/infra/services/reset-password"


export const useResetPasswordForm = () => {
   const navigate = useNavigate()

   const [params] = useSearchParams()

   const token = params.get("token")
   const email = params.get("email")

   const form = useForm<ResetPasswordRequest>({
      resolver: zodResolver(resetPasswordSchema),
      mode: 'onBlur',
      defaultValues: {
         password: '',
         confirmPassword: ''
      }
   })

   const { mutate, isPending } = useMutation({
      mutationKey: ['forgot-password'],
      mutationFn: async (data: ResetPasswordRequest) => {
         const apiResponse = await resetPasswordService.reset({
            token,
            email,
            newPassword: data.password
         })

         return apiResponse
      },
      onMutate: () => {
         const toastId = toast("Redefinindo senha...")

         return { toastId }
      },
      onSuccess: (_data: RecoverPassword.Model, _variables, context) => {
         if (context?.toastId) {
            toast.success('Senha redefinida com sucesso!', { id: context.toastId })
         }
         form.reset()
         navigate(PATHS.LOGIN)
      },
      onError: (_, _variables, context) => {
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