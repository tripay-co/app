import { z } from "zod"


export const loginSchema = z.object({
   login: z.string({
      required_error: 'CPF é obrigatório',
      invalid_type_error: 'CPF é inválido'
   }).min(1, {
      message: 'CPF é obrigatório'
   }).refine((value) => {
      const isText = /^[a-zA-Z0-9_]+$/.test(value)
      const isCPF = /^\d{11}$/.test(value)
      return isText || isCPF
   }, {
      message: 'Digite um CPF válido'
   }),
   password: z.string({
      required_error: 'Senha obrigatória',
      invalid_type_error: 'Senha inválida'
   }).min(1, {
      message: 'Senha obrigatória'
   })
})

export type LoginRequest = z.infer<typeof loginSchema>