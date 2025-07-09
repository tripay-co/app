import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"
import { GetawayRepositoryImpl } from "@/data/repositories/getaway/getaway"


const httpClient = new AxiosHttpClient()

export const getawayService = (id: string) => new GetawayRepositoryImpl(
   `${BASE_URL}/pinbank/${id}/documents`,
   httpClient
)