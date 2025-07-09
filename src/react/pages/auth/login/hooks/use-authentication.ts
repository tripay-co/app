import { useMutation } from '@tanstack/react-query'
import type { Authentication } from '@/domain/repositories/authentication'
import { authenticationRepository } from '@/infra/services/authentication'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginRequest } from '../schema/login-schema'
import { toast } from 'sonner'
import { useAuth } from '@/react/context/authentication'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/paths'


export const useAuthentication = () => {
   const { setInformationAccountControl } = useAuth()

   const navigate = useNavigate()

   const form = useForm({
      resolver: zodResolver(loginSchema),
      mode: 'onBlur',
      defaultValues: {
         login: '',
         password: ''
      }
   })

   const { mutate, isPending } = useMutation({
      mutationKey: ['auth'],
      mutationFn: async (data: LoginRequest) => {
         const apiResponse = await authenticationRepository.auth(data)

         return apiResponse
      },
      onMutate: () => {
         const toastId = toast("Autenticando...")

         return { toastId }
      },
      onSuccess: (_data: Authentication.Model, _variables, context) => {
         if (context?.toastId) {
            toast.success('Autenticado com sucesso!', { id: context.toastId })
         }

         setInformationAccountControl(_data)
         navigate(PATHS.METRICS, { replace: true })
      },
      onError: (error, _variables, context) => {
         if (context?.toastId) {
            toast.error('Credenciais inválidas.', { id: context.toastId })
         }

         form.reset()
      }
   })

   return {
      onSubmit: mutate,
      isLoading: isPending,
      form
   }
}