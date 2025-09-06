import z from "zod"


export const basicInfoSchema = z.object({
   cnpj: z.string().min(14, "CNPJ obrigatório"),
   socialReason: z.string().min(1, "Razão social obrigatória"),
   tradingName: z.string().min(1, "Nome fantasia obrigatório"),
   cnae: z.coerce.number({ required_error: "CNAE obrigatório" }).min(1, "CNAE inválido"),
})

export const responsibleInfoSchema = z.object({
   responsibleName: z.string().min(1, "Nome obrigatório"),
   cpf: z.string().min(1, "CPF obrigatório"),
   rg: z.string().min(1, "RG obrigatório"),
   rgUf: z.string().length(2, "UF inválido"),
   rgDate: z.string().min(1, "Data de emissão obrigatória"),
   gender: z.string().min(1, "Gênero obrigatório"),
   civilStatus: z.string().min(1, "Estado civil obrigatório"),
   dateOfBirth: z.string().min(1, "Data de nascimento obrigatória"),
})

export const contactAndAddressSchema = z.object({
   email: z.string().email("Email inválido"),
   phone: z.string().min(10, "Telefone obrigatório"),
   street: z.string().min(1, "Rua obrigatória"),
   number: z.string().min(1, "Número obrigatório"),
   complement: z.string().optional(),
   neighborhood: z.string().min(1, "Bairro obrigatório"),
   city: z.string().min(1, "Cidade obrigatória"),
   state: z.string().length(2, "Estado inválido"),
   zipCode: z.string().min(8, "CEP inválido"),
})

export const formSchema = z.object({
   ...basicInfoSchema.shape,
   ...responsibleInfoSchema.shape,
   ...contactAndAddressSchema.shape,
})

export type FormValues = z.infer<typeof formSchema>
