import { describe, expect, it } from "vitest"
import { mockAccountModel } from "@/domain/test/mock-account"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { HttpStatusCode } from "../../protocol/http-client"
import { ForbiddenError, UnexpectedError } from "@/domain/errors"
import { CommercialEstablishmentRepositoryImpl } from "./commercial-establishment"
import { mockCommercialEstablishment } from "@/domain/test/mock-commercial-establishment"


type SutTypes = {
   sut: CommercialEstablishmentRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new CommercialEstablishmentRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Commercial establishment", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.fetchAll(mockCommercialEstablishment())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttpPostClient with correct HEADERS", async () => {
      const {token} = mockCommercialEstablishment()
      const { sut, httpClientSpy } = makeSut()

      await sut.fetchAll({
         token
      })

      expect(httpClientSpy.headers).toMatchObject({ Authorization: `Bearer ${token}` })
})
it("Should be able call HttpPostClient with correct PARAMS", async () => {
   const { page, token } = mockCommercialEstablishment()
   const { sut, httpClientSpy } = makeSut()

   await sut.fetchAll({
      page,
      token
   })

   expect(httpClientSpy.params['page']).toBe(page)

})
it("Should be able throw invalidCredentialsError if HttposClients returns 403", async () => {
   const { sut, httpClientSpy } = makeSut()

   httpClientSpy.statusCode = HttpStatusCode.forbidden

   const promise = sut.fetchAll(mockCommercialEstablishment())

   await expect(promise).rejects.toThrow(new ForbiddenError('jwt malformed'))
})
it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
   const { sut, httpClientSpy } = makeSut()

   httpClientSpy.statusCode = HttpStatusCode.serverError

   const promise = sut.fetchAll(mockCommercialEstablishment())

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

   const account = await sut.fetchAll(mockCommercialEstablishment())

   expect(account).toEqual(httpResponse.body)
})
})
