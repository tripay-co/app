import { Form } from '@/presentation/components/ui/form'
import { useAuth } from "@/presentation/context/authentication"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { authenticationRepository } from "@/infra/services/authentication.ts"
import { toast } from "sonner"
import type { Authentication } from "@/domain/repositories/authentication.ts"
import { PATHS } from "@/presentation/app/paths.ts"
import { LoginSchema } from "@/presentation/pages/auth/Login/schema.ts"
import { LoginForm } from "@/presentation/pages/auth/Login/LoginForm"


export function LoginPage() {
   const { setInformationAccountControl } = useAuth()

   const navigate = useNavigate()

   const form = useForm({
      resolver: zodResolver(LoginSchema),
      mode: 'onSubmit',
      defaultValues: {
         email: '',
         password: ''
      }
   })

   const { mutate: onSubmit, isPending } = useMutation({
      mutationKey: ['auth'],
      mutationFn: async (data: Authentication.Params) => {
         return await authenticationRepository.auth(data)
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
      onError: (_, _variables, context) => {
         if (context?.toastId) {
            toast.error('Credenciais inválidas.', { id: context.toastId })
         }

         form.reset()
      }
   })

   const handleNavigateForgotPassword = () => {
      navigate(PATHS.FORGOT_PASSWORD)
   }

   const handleNavigateRegister = () => {
      navigate(PATHS.REGISTER)
   }

   return (
      <div>
         <div className='text-left'>
            <h1 className="text-2xl font-bold mb-4">Bem vindo de volta!</h1>
            <p className="text-muted-foreground text-sm block">
               Faça login para acessar sua conta e aproveitar todos os recursos disponíveis.
            </p>
         </div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit((v) => onSubmit(v))}>
               <LoginForm
                  form={form}
                  isLoading={isPending}
                  navigateRegister={handleNavigateRegister}
                  navigateForgotPassword={handleNavigateForgotPassword}
               />
            </form>
         </Form>
      </div>
   )
}
