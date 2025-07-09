import { describe, expect, it } from "vitest"
import { mockAccountModel } from "@/domain/test/mock-account"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { HttpStatusCode } from "../../protocol/http-client"
import { UnauthorizedError, UnexpectedError } from "@/domain/errors"
import { ResetPasswordRepositoryImpl } from "./reset-password"
import { mockResetPassword } from "@/domain/test/mock-reset-password"


type SutTypes = {
   sut: ResetPasswordRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new ResetPasswordRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Reset password", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.reset(mockResetPassword())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttPostClient with correct body", async () => {
      const { sut, httpClientSpy } = makeSut()
      const resetPasswordParams = mockResetPassword()

      await sut.reset(resetPasswordParams)

      expect(httpClientSpy.requestBody).toBe(resetPasswordParams)
   })
   it("Should be able throw invalidCredentialsError if HttposClients returns 401", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.unauthorized

      const promise = sut.reset(mockResetPassword())

      await expect(promise).rejects.toThrow(new UnauthorizedError('Unauthorized'))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.serverError

      const promise = sut.reset(mockResetPassword())

      await expect(promise).rejects.toThrow(new UnexpectedError("Unexpected error"))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 404", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.notFound


      const promise = sut.reset(mockResetPassword())

      await expect(promise).rejects.toThrow(new UnexpectedError("Unexpected error"))
   })
   it("Should be able throw AccountModel if HttposClients returns 200", async () => {
      const { sut, httpClientSpy } = makeSut()
      const httpResult = mockAccountModel()

      const httpResponse = await httpClientSpy.request({
         url: faker.internet.url(),
         method: 'post',
         body: httpResult
      })

      const account = await sut.reset(mockResetPassword())

      expect(account).toEqual(httpResponse.body)
   })
})
