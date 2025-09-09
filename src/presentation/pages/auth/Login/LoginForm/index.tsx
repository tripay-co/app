import { Button, Input } from "@/presentation/components/ui"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/presentation/components/ui/form.tsx"
import { Link } from "react-router-dom"
import type { LoginArgsType } from "@/presentation/pages/auth/Login/LoginForm/types.ts"


export function LoginForm({ form, isLoading, navigateRegister, navigateForgotPassword }: LoginArgsType) {
   const [showPassword, setShowPassword] = useState(false)

   return (
      <div className="flex flex-col gap-6 mt-5 max-w-200 w-full mx-auto">
         <div className="grid gap-6">
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>E-mail</FormLabel>
                     <FormControl>
                        <Input
                           placeholder="exemplo@email.com.br"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                  <FormItem>
                     <div className="flex items-center">
                        <FormLabel>Senha</FormLabel>
                        <a
                           href="#"
                           onClick={navigateForgotPassword}
                           className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                           Esqueceu sua senha?
                        </a>
                     </div>
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

            <Button
               type="submit"
               className="w-full bg-primary text-white cursor-pointer"
               disabled={isLoading}
            >
               {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
               <span className="bg-background text-muted-foreground relative z-10 px-2">
                  Não possui uma conta?
               </span>
            </div>
         </div>

         <div className="text-center text-sm">
            <Link to="#" onClick={navigateRegister} className="underline underline-offset-4">
               Cadastre-se
            </Link>
         </div>
      </div>
   )
}
