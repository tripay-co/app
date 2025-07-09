import { faker } from "@faker-js/faker"
import type { ValidateSession } from "../repositories/validate-session"


export const mockValidateSession = (): ValidateSession.Params => ({
   token: faker.string.uuid()
})

export const mockValidateSessionModel = (): ValidateSession.Model => ({
   messsage: faker.string.uuid(),
})