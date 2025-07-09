import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/react/components/ui/sidebar"
import logoIcon from "@/assets/logo-payturismo-icon.png"
import type { ComponentProps } from "react"
import { APPBAR_CONTROL } from "./data"
import { NavMain } from "./components/navigation/main"
import { HelpUs } from "./components/navigation/help-us"
import { Profile } from "./components/profile"
import { Manager } from "./components/navigation/manager"


export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                     <div>
                        <div className="flex items-center justify-center rounded-lg aspect-square size-8 text-sidebar-primary-foreground">
                           <img src={logoIcon} />
                        </div>
                        <div className="grid flex-1 text-sm leading-tight text-left">
                           <span className="font-semibold truncate">Payturismo</span>
                           <span className="text-xs truncate">
                              Pagar a viagem é fácil
                           </span>
                        </div>
                     </div>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={APPBAR_CONTROL.navMain} />
            <Manager items={APPBAR_CONTROL.navManager} />
            <HelpUs items={APPBAR_CONTROL.navSecondary} className="mt-auto" />
         </SidebarContent>
         <SidebarFooter>
            <Profile user={APPBAR_CONTROL.user} />
         </SidebarFooter>
      </Sidebar>
   )
}
