import { describe, expect, it } from "vitest"
import { mockAccountModel, mockAuthentication } from "@/domain/test/mock-account"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { AuthenticationRepositoryImpl } from "./authentication"
import { HttpStatusCode } from "../../protocol/http-client"
import { UnauthorizedError, UnexpectedError } from "@/domain/errors"


type SutTypes = {
   sut: AuthenticationRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new AuthenticationRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Authentication", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.auth(mockAuthentication())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttPostClient with correct body", async () => {
      const { sut, httpClientSpy } = makeSut()
      const authenticationParams = mockAuthentication()

      await sut.auth(authenticationParams)

      expect(httpClientSpy.requestBody).toBe(authenticationParams)
   })
   it("Should be able throw invalidCredentialsError if HttposClients returns 401", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.unauthorized

      const promise = sut.auth(mockAuthentication())

      await expect(promise).rejects.toThrow(new UnauthorizedError('Unauthorized'))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.serverError

      const promise = sut.auth(mockAuthentication())

      await expect(promise).rejects.toThrow(new UnexpectedError("Unexpected error"))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 404", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.notFound


      const promise = sut.auth(mockAuthentication())

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

      const account = await sut.auth(mockAuthentication())

      expect(account).toEqual(httpResponse.body)
   })
})
