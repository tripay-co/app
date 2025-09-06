import type { SidebarGroup } from "@/presentation/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"
import type { ComponentPropsWithoutRef } from "react"


export interface NavSecondaryArgsType extends ComponentPropsWithoutRef<typeof SidebarGroup>  {
   items: {
      title: string
      url: string
      icon: LucideIcon
   }[]
}
