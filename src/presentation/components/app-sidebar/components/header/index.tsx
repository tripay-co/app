import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/presentation/components/ui/breadcrumb"
import { Separator } from "@/presentation/components/ui/separator"
import { SidebarTrigger } from "@/presentation/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"


export function AppSideBardHeader() {
   const location = useLocation()

   const pathnames = location.pathname.split("/").filter(Boolean)
   
   return (
      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
         <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
               orientation="vertical"
               className="mx-2 data-[orientation=vertical]:h-4"
            />
            {pathnames.map((segment, index) => {
               const to = "/" + pathnames.slice(0, index + 1).join("/")
               const isLast = index === pathnames.length - 1
               const label = decodeURIComponent(segment).replace(/-/g, " ")
               return (
                 <>
                   {pathnames.length > 1 && index > 0 && (
                     <BreadcrumbSeparator className="hidden md:block" />
                   )}
                   <BreadcrumbItem key={to}>
                     {isLast ? (
                        <BreadcrumbPage className="capitalize">
                          {label}
                        </BreadcrumbPage>
                     ) : (
                        <BreadcrumbLink asChild>
                          <Link to={to} className="capitalize">
                            {label}
                          </Link>
                        </BreadcrumbLink>
                     )}
                   </BreadcrumbItem>
                 </>
               )
            })}
         </div>
      </header>
   )
}
