import { IconChevronDown, IconLayoutColumns } from "@tabler/icons-react"
import { Info } from "lucide-react"
import { Button, Skeleton, Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui"
import { Badge } from "../../ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"


export function TableUsersSkeleton() {
   const skeletonRows = Array.from({ length: 10 }, (_, i) => i)

   return (
      <Tabs defaultValue="outline" className="w-full flex-col justify-end gap-6">
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
               <Button variant="outline" className="cursor-pointer bg-transparent" size="sm" disabled>
                  <Info className="h-4 w-4" />
                  <span className="hidden lg:inline">Legenda dos status</span>
                  <span className="lg:hidden">Legenda</span>
               </Button>

               <Button variant="outline" className="cursor-pointer bg-transparent" size="sm" disabled>
                  <IconLayoutColumns />
                  <span className="hidden lg:inline">Costomizar colunas</span>
                  <span className="lg:hidden">Colunas</span>
                  <IconChevronDown />
               </Button>
            </div>
         </div>

         <TabsContent value="outline" className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
            <div className="rounded-lg border">
               <Table className="table-layout-fixed">
                  <TableHeader className="bg-muted sticky top-0 z-10">
                     <TableRow>
                        <TableHead className="w-8">
                           <Skeleton className="h-4 w-4" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-16" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-20" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-24" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-16" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-20" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-18" />
                        </TableHead>
                        <TableHead>
                           <Skeleton className="h-4 w-16" />
                        </TableHead>
                     </TableRow>
                  </TableHeader>

                  <TableBody className="**:data-[slot=table-cell]:first:w-8">
                     {skeletonRows.map((index) => (
                        <TableRow key={index}>
                           <TableCell className="w-8">
                              <Skeleton className="h-4 w-4" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-3 w-16" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-32" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-40" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-6 w-20 rounded-full" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-24" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-28" />
                           </TableCell>
                           <TableCell>
                              <div className="flex items-center gap-2">
                                 <Skeleton className="h-8 w-8 rounded" />
                                 <Skeleton className="h-8 w-8 rounded" />
                              </div>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
            <div className="flex items-center justify-between px-4">
               <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
                  <Skeleton className="h-4 w-98" />
               </div>

               <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8" />
                  <div className="flex items-center gap-1">
                     <Skeleton className="h-8 w-8" />
                     <Skeleton className="h-8 w-8" />
                  </div>
               </div>
            </div>
         </TabsContent>
      </Tabs>
   )
}
