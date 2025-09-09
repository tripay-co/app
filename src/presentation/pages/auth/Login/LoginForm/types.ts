import type { UseFormReturn } from "react-hook-form"
import type { LoginRequest } from "@/presentation/pages/auth/Login/schema.ts"


export interface LoginArgsType {
   form: UseFormReturn<LoginRequest>
   isLoading: boolean,
   navigateForgotPassword?: () => void,
   navigateRegister?: () => void
}