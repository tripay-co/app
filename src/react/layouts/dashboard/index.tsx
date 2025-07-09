
import { SidebarInset, SidebarProvider } from "@/react/components/ui/sidebar"
import { AppSideBardHeader } from "@/react/components/app-sidebar/components/header"
import { AppSidebar } from "@/react/components/app-sidebar"
import { Outlet } from "react-router-dom"


export function DashboardLayout() {
   return (
      <SidebarProvider
         style={
            {
               "--sidebar-width": "calc(var(--spacing) * 72)",
               "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
         }
      >
         <AppSidebar variant="inset" />
         <SidebarInset>
            <AppSideBardHeader />
            <Outlet />
         </SidebarInset>
      </SidebarProvider>
   )
}
