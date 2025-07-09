import { faker } from "@faker-js/faker"
import type { RecoverPassword } from "../repositories/recover-password"


export const mockRecoverPassword = (): RecoverPassword.Params => ({
   email: faker.internet.email(),
})

export const mockRecoverPasswordModel = (): RecoverPassword.Model => ({
   messsage: faker.string.uuid(),
})