import type { FormValues } from "@/react/pages/auth/create/schema/create-establishment-schema"
import type { UseFormReturn } from "react-hook-form"


export interface UseSetAddressArgsType<T extends FormValues> {
   cep: string
   form: UseFormReturn<T>
}

export interface ViaCEPResponse {
   cep: string
   logradouro: string
   complemento: string
   bairro: string
   localidade: string
   uf: string
   ibge: string
   gia: string
   ddd: string
   siafi: string
   erro?: boolean
}