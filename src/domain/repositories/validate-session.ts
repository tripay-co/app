import type { ValidateSessionModel } from "../models"


export namespace ValidateSession {
   export type Params = {
      token: string | null
   }

   export type Model = ValidateSessionModel
}

export interface ValidateSessionRepository {
   validate: (params: ValidateSession.Params) => Promise<ValidateSession.Model>
}
