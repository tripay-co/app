import type { ResetPasswordModel } from "../models/reset-password-model"


export namespace ResetPassword {
   export type Params = {
      newPassword: string
      email: string | null
      token: string | null
   }

   export type Model = ResetPasswordModel
}

export interface ResetPasswordRepository {
   reset: (params: ResetPassword.Params) => Promise<ResetPassword.Model>
}


