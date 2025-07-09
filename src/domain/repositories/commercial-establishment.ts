import type { CommercialEstablishmentModel } from "../models"


export namespace CommercialEstablishment {
   export type Params = {
      token: string
      page?: number
      name?: string
      tranding_name?: string
      data?: string
      status?: string
      cpf?: string
      cnpj?: string
      date?: string
      email?: string
      link?: string
   }

   export type Model = CommercialEstablishmentModel
}

export interface CommercialEstablishmentRepository {
   fetchAll: (params: CommercialEstablishment.Params) => Promise<CommercialEstablishment.Model>
}
