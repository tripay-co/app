import { faker } from '@faker-js/faker'
import type { Authentication } from "../repositories/authentication"


export const mockAuthentication = (): Authentication.Params => ({
   login: faker.number.int({ min: 11, max: 11 }).toString(),
   password: faker.internet.password()
})

export const mockAccountModel = (): Authentication.Model => ({
   accessToken: faker.string.uuid(),
   user: {
      id: faker.number.int(),
      name: faker.person.firstName(),
      firstLogin: faker.datatype.boolean(),
      phone: faker.phone.number(),
      changePassword: faker.datatype.boolean(),
      role: faker.number.int(),
      registrationStatus: "APPROVED",
      days_to_recive: "D+1",
      entrepay: {
         keySeller: faker.string.uuid()
      }
   },
})
