import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/react/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronRight } from "lucide-react"
import type { ManagerNavArgsType } from "./types"


export function Manager({ items }: ManagerNavArgsType) {
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Administração</SidebarGroupLabel>
         <SidebarMenu>
            {items.map((item) => {
               const hasSubItems = item.items && item.items.length > 0

               if (hasSubItems) {
                  return (
                     <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                     >
                        <SidebarMenuItem>
                           <CollapsibleTrigger asChild>
                              <SidebarMenuButton tooltip={item.title} className="cursor-pointer">
                                 {item.icon && <item.icon className="text-primary" />}
                                 <span >{item.title}</span>
                                 <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                              <SidebarMenuSub>
                                 {item.items?.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                       <SidebarMenuSubButton asChild>
                                          <a href={subItem.url} >
                                             <span>{subItem.title}</span>
                                          </a>
                                       </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                 ))}
                              </SidebarMenuSub>
                           </CollapsibleContent>
                        </SidebarMenuItem>
                     </Collapsible>
                  )
               } else {
                  return (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild tooltip={item.title}>
                           <a href={item.url} className="cursor-pointer">
                              {item.icon && <item.icon className="text-primary" />}
                              <span>{item.title}</span>
                           </a>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  )
               }
            })}
         </SidebarMenu>
      </SidebarGroup>
   )
}