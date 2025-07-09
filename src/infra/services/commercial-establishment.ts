import { CommercialEstablishmentRepositoryImpl } from "@/data/repositories/commercial-establishment/commercial-establishment"
import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"


const httpClient = new AxiosHttpClient()

export const commercialEstablishmentService = new CommercialEstablishmentRepositoryImpl(
   `${BASE_URL}/users`,
   httpClient
)