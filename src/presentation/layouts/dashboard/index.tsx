
import { SidebarInset, SidebarProvider } from "@/presentation/components/ui/sidebar"
import { AppSideBardHeader } from "@/presentation/components/app-sidebar/components/header"
import { AppSidebar } from "@/presentation/components/app-sidebar"
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
