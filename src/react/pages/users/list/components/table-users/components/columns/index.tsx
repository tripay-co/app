import {
   IconDotsVertical,
} from "@tabler/icons-react"
import type {
   ColumnDef,
   Row,
} from "@tanstack/react-table"

import { Badge } from "@/react/components/ui/badge"
import { Button } from "@/react/components/ui/button"
import { Checkbox } from "@/react/components/ui/checkbox"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/react/components/ui/dropdown-menu"
import { TableCellViewer } from "../cell-viewer"
import { formatCnpj, formatCpf, formatDate } from "@/react/utils/formater"
import { dateDifference, dayDifference, isValidDate } from "../../helpers/date-controlled"
import { getNameStatus } from "@/react/utils/status"
import { getBadgeColor } from "@/react/utils/badge"
import { useSendMessageModalStore } from "@/react/components/modals/send-message-modal/store/send-message-store"
import type { UsersModelTableArgsType } from "../../../../types"
import { useNavigate } from "react-router-dom"
import { PATHS } from "@/app/paths"


export const columns: ColumnDef<UsersModelTableArgsType>[] = [
   {
      id: "select",
      header: ({ table }) => (
         <div className="flex items-center justify-center">
            <Checkbox
               checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
               }
               onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
               aria-label="Select all"
            />
         </div>
      ),
      cell: ({ row }) => (
         <div className="flex items-center justify-center">
            <Checkbox
               checked={row.getIsSelected()}
               onCheckedChange={(value) => row.toggleSelected(!!value)}
               aria-label="Select row"
            />
         </div>
      ),
      enableSorting: false,
      enableHiding: false,
   },
   {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => {
         return <TableCellViewer item={row.original} />
      },
   },
   // {
   //    accessorKey: "tranding_name",
   //    header: "Nome Fantasia",
   //    cell: ({ row }) => (
   //       <div >
   //          <Badge variant="outline" className="text-muted-foreground px-1.5">
   //             {row.original.tranding_name}
   //          </Badge>
   //       </div>
   //    ),
   // },
   {
      accessorKey: "email",
      header: "E-mail",
      cell: ({ row }) => (
         <div>
            <Badge variant="outline" className="text-muted-foreground px-1.5">
               {row.original.email}
            </Badge>
         </div>
      ),
   },
   {
      accessorKey: "cpf",
      header: "CPF",
      cell: ({ row }) => (
         <div>
            <Badge variant="outline" className="text-muted-foreground px-1.5">
               {formatCpf(row.original.cpf)}
            </Badge>
         </div>
      ),
   },
   {
      accessorKey: "cnpj",
      header: "CNPJ",
      cell: ({ row }) => (
         <div>
            <Badge variant="outline" className="text-muted-foreground px-1.5">
               {formatCnpj(row.original.cnpj)}
            </Badge>
         </div>
      ),
   },
   {
      accessorKey: "date",
      header: "Criado Em",
      cell: ({ row }) => (
         <div>
            <Badge variant="outline" className="text-muted-foreground px-1.5">
               {formatDate(row.original.date)}
            </Badge>
         </div>
      ),
   },
   {
      accessorKey: "last_link",
      header: "Último Link",
      cell: ({ row }) => {
         const lastLink = row.original.last_link

         let badgeColor = "bg-blue-500" 

         if (isValidDate(lastLink)) {
            const isOld2Days = dayDifference({ date: lastLink, days: 2 })
            const isOld5Days = dayDifference({ date: lastLink, days: 5 })

            if (isOld5Days) {
               badgeColor = "bg-red-500"
            } else if (isOld2Days) {
               badgeColor = "bg-yellow-500"
            } else {
               badgeColor = "bg-green-500"
            }
         }

         return (
            <Badge className={badgeColor}>
               {dateDifference(lastLink)}
            </Badge>
         )
      },
   },
   {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
         <Badge className={getBadgeColor(row.original.status)}>
            {getNameStatus(row.original.status)}
         </Badge>
      ),
   },
   {
      id: "actions",
      cell: ({ row }) => <Actions {...row} />
   },
]

export const Actions = (row: Row<UsersModelTableArgsType>) => {
   const { open, setName, setPhone } = useSendMessageModalStore()
   const navigate = useNavigate()

   const handleViewProfile = () => {
      navigate(PATHS.USERS_DETAILS(String(row.original.id)))
   }

   const handleOpenMessageModels = () => {
      setName(row.original.name)
      setPhone(row.original.phone)
      open()
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               variant="ghost"
               className="data-[state=open]:bg-muted text-muted-foreground flex size-8 cursor-pointer"
               size="icon"
            >
               <IconDotsVertical />
               <span className="sr-only">Abrir opções</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" onClick={handleViewProfile}>Detalhes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-green-500 cursor-pointer" onClick={handleOpenMessageModels}>Enviar mensagem</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}