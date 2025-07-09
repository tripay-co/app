import './styles/index.css'
import { LoginForm } from "./components/login-form"
import { useAuthentication } from './hooks/use-authentication'
import { Form } from '@/react/components/ui/form'


export function LoginPage() {
   const { onSubmit, form, isLoading } = useAuthentication()

   return (
      <div>
         <div className='text-center'>
            <h1 className="text-2xl font-bold mb-4">Entre na sua conta</h1>
            <p className="text-muted-foreground text-sm text-balance block">
               Digite seu CPF e sua senha para acessar a plataforma
            </p>
         </div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit((v) => onSubmit(v))}>
               <LoginForm form={form} isLoading={isLoading} />
            </form>
         </Form>
      </div>
   )
}
