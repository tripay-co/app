import { describe, expect, it } from "vitest"
import { mockAccountModel } from "@/domain/test/mock-account"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { HttpStatusCode } from "../../protocol/http-client"
import { ForbiddenError, UnexpectedError } from "@/domain/errors"
import { ValidateSessionRepositoryImpl } from "./validate-session"
import { mockValidateSession } from "@/domain/test/mock-validate-session"


type SutTypes = {
   sut: ValidateSessionRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new ValidateSessionRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Validate session", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.validate(mockValidateSession())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttpPostClient with correct HEADERS", async () => {
      const token = mockValidateSession()
      const { sut, httpClientSpy } = makeSut()

      await sut.validate(token)

      expect(httpClientSpy.headers).toBe(`Authorization: Bearer ${token.token}`)

   })
   it("Should be able throw invalidCredentialsError if HttposClients returns 403", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.forbidden

      const promise = sut.validate(mockValidateSession())

      await expect(promise).rejects.toThrow(new ForbiddenError('jwt malformed'))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.serverError

      const promise = sut.validate(mockValidateSession())

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

      const account = await sut.validate(mockValidateSession())

      expect(account).toEqual(httpResponse.body)
   })
})
