import { Outlet } from "react-router-dom"
import { Carrousel } from "@/react/components/carrousel"


export function AuthenticationLayout() {

   return (
      <div className="grid min-h-svh lg:grid-cols-2">
         <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex flex-1 items-center justify-center max-w-[400px] mx-auto">
               <Outlet/>
            </div>
         </div>
         <div className="md:flex md:flex-col md:justify-between relative hidden lg:block">
            <Carrousel/>
         </div>
      </div>
   )
}