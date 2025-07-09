import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"
import { SendMessageCommercialEstablishmentRepositoryImpl } from "@/data/repositories/send-message-commercial-establishment/send-message-commercial-establishment"


const httpClient = new AxiosHttpClient()

export const sendMessageCommercialEstablishmentService = new SendMessageCommercialEstablishmentRepositoryImpl(
   `${BASE_URL}/users/send-whatsapp-message`,
   httpClient
)