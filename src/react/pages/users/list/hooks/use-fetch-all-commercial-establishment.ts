import { commercialEstablishmentService } from "@/infra/services/commercial-establishment"
import { useAuth } from "@/react/context/authentication"
import useSearch from "@/react/hooks/use-search"
import { useQuery } from "@tanstack/react-query"
import type { UsersModelTableArgsType } from "../types"


export default function useFetchAllCommercialEstablishment() {
   const { getToken } = useAuth()

   const { getAllSearchParams } = useSearch()

   const { name, tranding_name, data: date, status, page, cpf, cnpj, email, link } = getAllSearchParams()

   const { data: response, isLoading, isError } = useQuery({
      queryKey: ["users", name, tranding_name, date, status, page, cpf, cnpj, email, link],
      queryFn: async () => {
         return await commercialEstablishmentService.fetchAll({
            token: getToken()!,
            name,
            tranding_name,
            date,
            status,
            page: Number(page) || 1,
            cpf,
            cnpj,
            email,
            link
         })
      }
   })

   const mappedUsers: UsersModelTableArgsType[] = (response?.data ?? []).map(user => ({
         id: user.id,
         name: user.name, 
         tranding_name: user.tranding_name,
         email: user.emaiL,
         cpf: user.cpf,
         cnpj: user.cnpj,
         date: user.date,
         last_link: user.transactions?.[0]?.created_at ?? '-', 
         status: user.status,
         phone: user.phone
      }))

   return { users: mappedUsers, isLoading, isError, total_pages: response?.pages }
}