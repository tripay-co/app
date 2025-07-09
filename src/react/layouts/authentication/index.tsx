import logo from "@/assets/logo-payturismo.png"
import { Outlet } from "react-router-dom"


export function AuthenticationLayout () {
   return (
      <div className="grid min-h-svh lg:grid-cols-2">
         <div className="relative hidden lg:flex lg:flex-col lg:justify-between bg-gradient-to-bl from-secondary to-primary animate-gradient-bg rounded-br-4xl rounded-tr-4xl">
            <img src={logo} alt="Payturismo" className="w-auto h-auto max-w-[350px] p-4" />
            <p className="p-4 text-white">
               "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos"
               <br /> Provérbios 16:3
            </p>
         </div>
         <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center max-w-[400px] mx-auto">
               <Outlet/>
            </div>
         </div>
      </div>
   )
}