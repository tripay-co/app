import { useState } from "react"
import { Button } from "@/react/components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/react/components/ui/dialog"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/react/components/ui/table"
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/react/components/ui/pagination"
import { useOpenConsultProcessModal } from "./store/consult-process-store"
import { STATUS_PROCESS } from "./data"



export function ConsultProcessModal({ process }: { process: any }) {
   const { isOpen, close } = useOpenConsultProcessModal()

   const [currentPage, setCurrentPage] = useState(1)

   const pageSize = 10

   const startIndex = (currentPage - 1) * pageSize
   const endIndex = startIndex + pageSize

   const processosPaginados =
      process?.result?.processos?.slice(startIndex, endIndex) || []

   const totalPages = Math.ceil(process?.result?.processos?.length / pageSize)

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1)
      }
   }

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1)
      }
   }

   return (
      <Dialog open={isOpen} onOpenChange={close}>
         <DialogContent>
            <DialogHeader >
               <DialogTitle>Detalhes Consulta de Processos</DialogTitle>
            </DialogHeader>
            <Table className="border rounded-md">
               <TableHeader>
                  <TableRow>
                     <TableHead className="font-bold">Nome Requerente</TableHead>
                     <TableHead className="font-bold">Nome Requerido</TableHead>
                     <TableHead className="font-bold">Área</TableHead>
                     <TableHead className="font-bold text-nowrap">
                        Ramo do Direito
                     </TableHead>
                     <TableHead className="font-bold">Tribunal</TableHead>
                     <TableHead className="font-bold">Processo</TableHead>
                     <TableHead>{""}</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {processosPaginados?.length > 0 ? (
                     processosPaginados.map((processo: any) => (
                        <TableRow key={processo.numeroProcessoUnico}>
                           <TableCell className="text-ellipsis">
                              {processo.partes[1].nome}
                           </TableCell>
                           <TableCell>
                              {
                                 processo.partes
                                    .filter((parte: any) =>
                                       STATUS_PROCESS.includes(parte.tipo)
                                    )
                                    .map((parte: any) => parte.nome)[0]
                              }
                           </TableCell>
                           <TableCell>{processo.area}</TableCell>
                           <TableCell>{processo.status.ramoDireito}</TableCell>
                           <TableCell>{processo.tribunal}</TableCell>
                           <TableCell>{processo.numeroProcessoUnico}</TableCell>
                           <TableCell>
                              <Button>
                                 <a
                                    href={processo.urlProcesso}
                                    className="text-sm"
                                    target="_blank"
                                 >
                                    Ver mais
                                 </a>
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={6} className="py-4 text-center">
                           Nenhum processo encontrado.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>

            <Pagination className="mt-4">
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious
                        href="#"
                        onClick={handlePreviousPage}
                     />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#" isActive>
                        {currentPage}
                     </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationNext
                        href="#"
                        onClick={handleNextPage}
                     />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </DialogContent>
      </Dialog>
   )
}
