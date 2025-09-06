import useSearch from "@/presentation/hooks/use-search"
import { Button } from "../ui"
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react"



interface PaginationProps {
   totalPage: number;
}

export const Pagination = ({ totalPage }: PaginationProps) => {
   const { handleSearch, getAllSearchParams } = useSearch()
   const { page } = getAllSearchParams()

   const currentPage = Number(page) || 1

   const handleNextPage = () => {
      handleSearch({
         page: currentPage + 1
      })
   }

   const handleLastPage = () => {
      handleSearch({
         page: totalPage
      })
   }

   const handleFirstPage = () => {
      handleSearch({
         page: 1
      })
   }

   const handlePreviousPage = () => {
      handleSearch({
         page: currentPage - 1
      })
   }

   return (
      <div className="flex w-full items-center gap-8 lg:w-fit">
         <div className="flex w-fit items-center justify-center text-sm font-medium">
            Página {currentPage} de {totalPage}
         </div>
         <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
               variant="outline"
               className="hidden h-8 w-8 p-0 lg:flex"
               onClick={handleFirstPage}
               disabled={currentPage <= 1}
            >
               <span className="sr-only">Go to first page</span>
               <IconChevronsLeft />
            </Button>
            <Button
               variant="outline"
               className="size-8 cursor-pointer"
               size="icon"
               onClick={handlePreviousPage}
               disabled={currentPage <= 1}
            >
               <span className="sr-only">Ir para a próxima página</span>
               <IconChevronLeft />
            </Button>
            <Button
               variant="outline"
               className="size-8 cursor-pointer"
               size="icon"
               onClick={handleNextPage}
               disabled={currentPage >= totalPage || totalPage === 0}
            >
               <span className="sr-only">Voltar para página anterior</span>
               <IconChevronRight />
            </Button>
            <Button
               variant="outline"
               className="hidden size-8 lg:flex"
               size="icon"
               onClick={handleLastPage}
               disabled={currentPage >= totalPage || totalPage === 0}
            >
               <span className="sr-only">Ir para a última página</span>
               <IconChevronsRight />
            </Button>
         </div>
      </div>
   )
}