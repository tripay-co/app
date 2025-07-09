import { LoginForm } from "./components/login-form"
import { useAuthentication } from './hooks/use-authentication'
import { Form } from '@/react/components/ui/form'


export function LoginPage() {
   const { onSubmit, form, isLoading } = useAuthentication()

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
               <LoginForm form={form} isLoading={isLoading} />
            </form>
         </Form>
      </div>
   )
}
