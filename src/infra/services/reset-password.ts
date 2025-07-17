import { ResetPasswordRepositoryImpl } from "@/data/repositories/reset-password/reset-password"
import { AxiosHttpClient } from "../axios-http-client"
import { BASE_URL } from "@/lib/axios"


const httpClient = new AxiosHttpClient()

export const resetPasswordService = new ResetPasswordRepositoryImpl(
   `${BASE_URL}/auth/password`,
   httpClient
)