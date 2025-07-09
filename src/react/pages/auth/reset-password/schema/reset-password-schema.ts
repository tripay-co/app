import { z } from "zod"


export const resetPasswordSchema = z.object({
   password: z
      .string()
      .min(8, "É nesessário ao menos 8 caracteres.")
      .regex(/[0-9]+/, "É necessário pelo menos um numero")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/[^A-Za-z0-9]/, "É necessário pelo menos um caracter especial"),
   confirmPassword: z.string().min(1, "Este campo é obrigatório"),
}).refine(
   ({ password, confirmPassword }) => {
      return password === confirmPassword
   },
   {
      message: "As senhas não correspondem",
      path: ["confirmPassword"],
   }
)

export type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>