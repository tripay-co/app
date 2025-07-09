import { BASE_URL } from "@/lib/axios"
import { useAuth } from "@/react/context/authentication"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"


// TODO: REFACTOR AND CREATE TEST TO VALIDATE FETHC
/* 
   I Create this tempplate to view render information user on page
   I need to refactor this code and create test to validate fetch
   I go to lunch after when i back i will refactor this code
   I will create a new file to test this code
*/
export default function useFetchOneUser() {
   const { getToken } = useAuth()
   const { id: userId } = useParams()

   const { data, isLoading } = useQuery({
      queryKey: ['user-detail', userId],
      queryFn: () => axios.get(`${BASE_URL}/users/${userId}/me`, {
         headers: {
            Authorization: `Bearer ${getToken()}`,
         }
      }).then(res => res.data),
   })

   return {
      user: data,
      isLoading
   }
}