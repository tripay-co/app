import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"
import { RecoverPasswordRepositoryImpl } from "@/data/repositories/recover-password/recover-password"


const httpClient = new AxiosHttpClient()

export const recoverPasswordService = new RecoverPasswordRepositoryImpl(
   `${BASE_URL}/users/forgot-password`,
   httpClient
)