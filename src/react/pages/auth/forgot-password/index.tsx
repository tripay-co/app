import { PATHS } from "@/app/paths"
import { Input, Button, Form, FormField, FormLabel, FormItem, FormControl, FormMessage } from "@/react/components/ui"
import { useNavigate } from "react-router-dom"
import { useForgotPasswordForm } from "./hooks/use-forgot-password"


export const ForgotPassword = () => {
  const { form, onSubmit, isLoading} = useForgotPasswordForm()

  const navigate = useNavigate()

  const handleBackLogin = () => {
    navigate(PATHS.LOGIN)
  }

  return (
    <div>
      <div className='text-center'>
        <h1 className="text-2xl font-bold mb-4">Esqueceu sua senha?</h1>
        <p className="text-muted-foreground text-sm text-balance block">
          Digite um e-mail para receber instruções sobre como redefinir sua senha
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((v) => onSubmit(v))}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="exemplo@seuemail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-primary text-white cursor-pointer mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t mt-10">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Lembrou sua senha?
        </span>
      </div>
      <div className="text-center text-sm mt-5">
        <a href="#" className="underline underline-offset-4" onClick={handleBackLogin}>
          Faça seu login
        </a>
      </div>
    </div>
  )
}
