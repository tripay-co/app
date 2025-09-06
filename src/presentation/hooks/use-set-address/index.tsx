import { useQuery } from "@tanstack/react-query"
import type { FormValues } from "@/presentation/pages/auth/create/schema/create-establishment-schema"
import type { Path, PathValue } from "react-hook-form" // 👈 Importe PathValue
import type { UseSetAddressArgsType, ViaCEPResponse } from "./types"
import { unFormat } from "@/presentation/shared/functions"
import axios from "axios"
import { useEffect } from "react"


export function useSetAddress<T extends FormValues>({ cep, form }: UseSetAddressArgsType<T>) {
   const formattedCEP = unFormat(cep || "")

   const { data, isLoading, error, isSuccess } = useQuery({
      queryKey: ["address", formattedCEP],
      queryFn: async (): Promise<ViaCEPResponse> => {
         const { data } = await axios.get(`https://viacep.com.br/ws/${formattedCEP}/json/`)
         if (data.erro) {
            throw new Error("CEP não encontrado.")
         }
         return data
      },
      enabled: formattedCEP.length === 8,
      retry: false,
      refetchOnWindowFocus: false,
   })

   useEffect(() => {
      if (isSuccess && data) {
         form.setValue("street" as Path<T>, (data.logradouro || "") as PathValue<T, Path<T>>)
         form.setValue("neighborhood" as Path<T>, (data.bairro || "") as PathValue<T, Path<T>>)
         form.setValue("city" as Path<T>, (data.localidade || "") as PathValue<T, Path<T>>)
         form.setValue("state" as Path<T>, (data.uf || "") as PathValue<T, Path<T>>)
      }
   }, [data, isSuccess, form])

   return {
      isLoading,
      error: error?.message || null,
   }
}