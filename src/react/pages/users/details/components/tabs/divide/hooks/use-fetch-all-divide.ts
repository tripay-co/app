import { BASE_URL } from "@/lib/axios"
import { useAuth } from "@/react/context/authentication"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"


export const useFetchSerasaDetail = () => {
   const { id } = useParams()
   const { getToken } = useAuth()

   const { data, isLoading } = useQuery({
      queryKey: ['serasa-detail', id],
      queryFn: async () => {
         const { data } = await axios.get(`${BASE_URL}/consulta-serasa/${id}`, {
            headers: {
               Authorization: `Bearer ${getToken()}`,
            }
         })

         return data
      }
   })

   console.log(data)

   return {
      serasaDetail: data,
      isLoading: isLoading
   }
}