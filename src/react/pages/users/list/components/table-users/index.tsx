import {
   closestCenter,
   DndContext,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
   SortableContext,
   verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
   flexRender,
   getCoreRowModel,
   useReactTable
} from "@tanstack/react-table"
import { Badge } from "@/react/components/ui/badge"
import { Button } from "@/react/components/ui/button"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/react/components/ui/table"
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/react/components/ui/tabs"

import { columns } from "./components/columns"
import { DraggableRow } from "./components/row"
import { Pagination } from "@/react/components/paggination"
import useFetchAllCommercialEstablishment from "../../hooks/use-fetch-all-commercial-establishment"
import { useStatusMessageModal } from "@/react/components/modals/status-message-modal/hooks/use-status-message-state"
import { Info } from "lucide-react"
import { TableUsersSkeleton } from "@/react/components/skelletons/table"
import { useState } from "react"


export function TableUsers() {
   const [rowSelection, setRowSelection] = useState({})

   const { open } = useStatusMessageModal()
   const { total_pages, isLoading, users } = useFetchAllCommercialEstablishment()
 
   const data = users ?? []

   const table = useReactTable({
      data,
      columns,
      state: {
         rowSelection,
      },
      getRowId: (row) => row.id.toString(),
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: getCoreRowModel(),
   })


   if (isLoading) {
      return <TableUsersSkeleton />
   }
   
   return (
      <Tabs
         defaultValue="outline"
         className="w-full flex-col justify-end gap-6"
      >
         <div className="flex items-center justify-between px-4 lg:px-6">
            <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
               <TabsTrigger value="outline">Outline</TabsTrigger>
               <TabsTrigger value="past-performance">
                  Past Performance <Badge variant="secondary">3</Badge>
               </TabsTrigger>
               <TabsTrigger value="key-personnel">
                  Key Personnel <Badge variant="secondary">2</Badge>
               </TabsTrigger>
               <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
            </TabsList>
            <div className="flex items-center justify-end gap-2 w-full">
               <Button variant="outline" className="cursor-pointer" size="sm" onClick={open}>
                  <Info className="h-4 w-4" />
                  <span className="hidden lg:inline" >Legenda dos status</span>
                  <span className="lg:hidden">Legenda</span>
               </Button>
            </div>
         </div>
         <TabsContent
            value="outline"
            className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6 "
         >
            <div className="rounded-lg border">
               <DndContext
                  collisionDetection={closestCenter}
                  modifiers={[restrictToVerticalAxis]}
               >
                  <Table className="table-layout-fixed">
                     <TableHeader className="bg-blend-screen sticky top-0 z-10">
                        {table.getHeaderGroups().map((headerGroup) => (
                           <TableRow key={headerGroup.id}>
                              {headerGroup.headers.map((header) => {
                                 return (
                                    <TableHead key={header.id} colSpan={header.colSpan}>
                                       {header.isPlaceholder
                                          ? null
                                          : flexRender(
                                             header.column.columnDef.header,
                                             header.getContext()
                                          )}
                                    </TableHead>
                                 )
                              })}
                           </TableRow>
                        ))}
                     </TableHeader>
                     <TableBody className="**:data-[slot=table-cell]:first:w-8 bg-white">
                        {table.getRowModel().rows?.length ? (
                           <SortableContext
                              items={data.map((item) => item.id)}
                              strategy={verticalListSortingStrategy}
                           >
                              {table.getRowModel().rows.map((row) => {
                                 return (
                                    <DraggableRow key={row.id} row={row}/>
                                 )
                              })}
                           </SortableContext>
                        ) : (
                              <TableRow>
                              <TableCell
                                 colSpan={columns.length}
                                 className="h-24 text-center "
                              >
                                 Sem resultados.
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </DndContext>
            </div>
            <div className="flex items-center justify-between px-4">
               <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
                  {table.getFilteredSelectedRowModel().rows.length} of{" "}
                  {table.getFilteredRowModel().rows.length} linha(s) selecionadas.
               </div>
               <Pagination totalPage={total_pages!}/>  
            </div>
         </TabsContent>
      </Tabs>
   )
}