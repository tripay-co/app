

import type { SendMessageCommercialEstablishmentModel } from "../models/send-message-commercial-establishment-model"


export namespace SendMessageCommercialEstablishment {
   export type Params = {
      token: string
      phone: string
      title: string
      message: string
   }

   export type Model = SendMessageCommercialEstablishmentModel
}

export interface SendMessageCommercialEstablishmentRepository {
   send: (params: SendMessageCommercialEstablishment.Params) => Promise<SendMessageCommercialEstablishment.Model>
}


