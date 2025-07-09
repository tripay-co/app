import { getawayService } from "@/infra/services/getaway"
import { useAuth } from "@/react/context/authentication"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"


export function useFetchAllInformation() {
   const { id } = useParams()
   const { getToken } = useAuth()
   
   const { data, isLoading } = useQuery({
      queryKey: ["documents", id],
      queryFn: async () => {
          const apiResponse = await getawayService(id!).fetch({
            token: getToken()!,
          })

          return apiResponse
      },
   })


   return {
      info: data,
      isLoading,
   }
}