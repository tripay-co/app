import { faker } from "@faker-js/faker"
import type { ResetPassword } from "../repositories/reset-password"


export const mockResetPassword = (): ResetPassword.Params => ({
   email: faker.internet.email(),
   newPassword: faker.internet.password(),
   token: faker.string.uuid()
})

export const mockResetPasswordModel = (): ResetPassword.Model => ({
   messsage: faker.string.uuid(),
})