import type { RecoverPasswordModel } from "../models"


export namespace RecoverPassword {
   export type Params = {
      email: string
   }

   export type Model = RecoverPasswordModel
}

export interface RecoverPasswordRepository {
   recover: (params: RecoverPassword.Params) => Promise<RecoverPassword.Model>
}


