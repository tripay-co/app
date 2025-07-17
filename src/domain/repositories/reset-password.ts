import type { ResetPasswordModel } from "../models/reset-password-model"


export namespace ResetPassword {
   export type Params = {
      token: string | null
      email: string | null
      newPassword: string
   }

   export type Model = ResetPasswordModel
}

export interface ResetPasswordRepository {
   reset: (params: ResetPassword.Params) => Promise<ResetPassword.Model>
}


