import type { UseFormReturn } from "react-hook-form"
import type { LoginRequest } from "./schema/login-schema"


export interface LoginProps {
   form: UseFormReturn<LoginRequest>
   isLoading: boolean
}