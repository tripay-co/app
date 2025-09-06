import { AuthenticationRepositoryImpl } from "@/data/repositories/authentication/authentication"
import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/presentation/lib/axios"


const httpClient = new AxiosHttpClient()

export const authenticationRepository = new AuthenticationRepositoryImpl(
   `${BASE_URL}/users/login`,
   httpClient
)