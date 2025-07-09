import type { GetawayModel } from "../models/getaway-model"


export namespace Getaway {
   export type Params = {
      token: string
   }

   export type Model = GetawayModel
}

export interface GetawayRepository {
   fetch: (params: Getaway.Params) => Promise<Getaway.Model>
}
