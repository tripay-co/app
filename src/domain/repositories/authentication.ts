import type { AccountModel } from "../models/account-model"


export namespace Authentication {
   export type Params = {
      email: string
      password: string
   }

   export type Model = AccountModel
}

export interface AuthenticationRepository {
   auth: (params: Authentication.Params) => Promise<Authentication.Model>
}


