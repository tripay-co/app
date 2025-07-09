import { faker } from "@faker-js/faker"
import type { SendMessageCommercialEstablishment } from "../repositories/send-message-commercial-establishment"


export const mockSendMessageCommercialEstablishment = (): SendMessageCommercialEstablishment.Params => ({
   token: faker.string.uuid(),
   message: faker.lorem.sentence(),
   title: faker.lorem.words(3),
   phone: faker.phone.number(),
})

export const mockSendMessageCommercialEstablishmentModel = (): SendMessageCommercialEstablishment.Model => {
   return
}