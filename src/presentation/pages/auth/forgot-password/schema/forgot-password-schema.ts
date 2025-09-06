import { z } from "zod"


export const forgotPasswordSchema = z.object({
   email: z.string({
      required_error: 'E-mail obrigatório',
      invalid_type_error: 'E-mail inválido'
   }).email({
      message: 'E-mail inválido'
   })
})

export type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>