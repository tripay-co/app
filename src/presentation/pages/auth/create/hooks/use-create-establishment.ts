import { useMutation } from '@tanstack/react-query'
import type { Authentication } from '@/domain/repositories/authentication'
import { toast } from 'sonner'
import { type FormValues } from '../schema/create-establishment-schema'
import axios from 'axios'


export const useAuthentication = () => {

   const { mutate, isPending } = useMutation({
      mutationKey: ['create-establishment'],
      mutationFn: async (payload: FormValues): Promise<any> => {
        return await axios.post("http://localhost:3000/establishment", {
            ...payload,
            cnae: Number(payload.cnae),
         })
      },
      onMutate: () => {
         const toastId = toast("Registrando...")

         return { toastId }
      },
      onSuccess: (_data: Authentication.Model, _variables, context) => {
         if (context?.toastId) {
            toast.success('Registrado com sucesso!', { id: context.toastId })
         }
      },
      onError: (error, _variables, context) => {
         if (context?.toastId) {
            toast.error(error.message, { id: context.toastId })
         }
      }
   })

   return {
      onSubmit: mutate,
      isLoading: isPending,
   }
}