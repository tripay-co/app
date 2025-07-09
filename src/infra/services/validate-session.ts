import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"
import { ValidateSessionRepositoryImpl } from "@/data/repositories/validate-session/validate-session"


const httpClient = new AxiosHttpClient()

export const velidateSessionService = new ValidateSessionRepositoryImpl(
   `${BASE_URL}/users/validate-token`,
   httpClient
)