import { Outlet } from "react-router-dom"
import { Carrousel } from "@/presentation/components/carrousel"


export function AuthenticationLayout() {

   return (
      <div className="grid min-h-svh lg:grid-cols-2">
         <div className="md:flex md:flex-col md:justify-between relative hidden lg:block">
            <Carrousel />
         </div>
         <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center max-w-[600px] mx-auto">
               <Outlet />
            </div>
         </div>
      </div>
   )
}