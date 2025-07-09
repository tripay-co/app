import {
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/react/components/ui/sidebar"
import type { NavSecondaryArgsType } from "./types"


export function HelpUs({ items, ...props }: NavSecondaryArgsType) {
   return (
      <SidebarGroup {...props}>
         <SidebarGroupLabel>Suporte</SidebarGroupLabel>
         <SidebarGroupContent>
            <SidebarMenu>
               {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                     <SidebarMenuButton asChild>
                        <a href={item.url}>
                           <item.icon className="text-primary" />
                           <span>{item.title}</span>
                        </a>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarGroupContent>
      </SidebarGroup>
   )
}
