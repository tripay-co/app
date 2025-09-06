import { PATHS } from "@/presentation/app/paths"
import { Input, Button, Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/presentation/components/ui"
import { useNavigate } from "react-router-dom"
import { useResetPasswordForm } from "./hooks/use-reset-password"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"


export const ResetPassword = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const { form, onSubmit, isLoading } = useResetPasswordForm()

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
            <form onSubmit={form.handleSubmit((v) => onSubmit(v))} className="flex flex-col gap-6 mt-5">
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Nova Senha</FormLabel>
                        <FormControl>
                           <div className="relative">
                              <Input
                                 type={showPassword ? "text" : "password"}
                                 className="pr-10"
                                 {...field}
                              />
                              <button
                                 type="button"
                                 onClick={() => setShowPassword((prev) => !prev)}
                                 className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                                 tabIndex={-1}
                              >
                                 {showPassword
                                    ? <EyeOff size={18} className="cursor-pointer" />
                                    : <Eye size={18} className="cursor-pointer" />
                                 }
                              </button>
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Confirmar senha</FormLabel>
                        <FormControl>
                           <div className="relative">
                              <Input
                                 type={showConfirmPassword ? "text" : "password"}
                                 className="pr-10"
                                 {...field}
                              />
                              <button
                                 type="button"
                                 onClick={() => setShowConfirmPassword((prev) => !prev)}
                                 className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                                 tabIndex={-1}
                              >
                                 {showConfirmPassword
                                    ? <EyeOff size={18} className="cursor-pointer" />
                                    : <Eye size={18} className="cursor-pointer" />
                                 }
                              </button>
                           </div>
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
