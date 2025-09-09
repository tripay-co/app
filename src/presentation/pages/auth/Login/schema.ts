import { z } from "zod"


export const LoginSchema = z.object({
   email: z.string({
      required_error: 'E-mail é obrigatório',
      invalid_type_error: 'E-mail inválido'
   }).min(1, {
      message: 'E-mail é obrigatório'
   }).email({
      message: 'E-mail inválido'
   }),
   password: z.string({
      required_error: 'Senha obrigatória',
      invalid_type_error: 'Senha inválida'
   }).min(1, {
      message: 'Senha obrigatória'
   })
})

export type LoginRequest = z.infer<typeof LoginSchema>