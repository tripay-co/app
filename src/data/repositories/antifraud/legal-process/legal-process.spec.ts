import { describe, expect, it } from "vitest"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { HttpStatusCode } from "../../protocol/http-client"
import { ForbiddenError, UnexpectedError } from "@/domain/errors"
import { GetawayRepositoryImpl } from "./legal-process"
import { mockGetaway, mockGetawayModel } from "@/domain/test/mock-getaway"


type SutTypes = {
   sut: GetawayRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new GetawayRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Commercial establishment", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.fetch(mockGetaway())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttpPostClient with correct URL containing ID", async () => {
      const id = faker.string.uuid()
      const url = faker.internet.url()
      const expectedUrl = `${url}/pinbank/${id}/documents`
      const { sut, httpClientSpy } = makeSut(expectedUrl)

      await sut.fetch(mockGetaway())

      expect(httpClientSpy.url).toBe(expectedUrl)
      expect(httpClientSpy.url).toContain(id)
      expect(httpClientSpy.url).toContain(`/pinbank/${id}/documents`)
   })
   it("Should be able call HttpPostClient with correct HEADERS", async () => {
      const {token} = mockGetaway()
      const { sut, httpClientSpy } = makeSut()

      await sut.fetch({
         token
      })

      expect(httpClientSpy.headers).toMatchObject({ Authorization: `Bearer ${token}` })
})
it("Should be able throw invalidCredentialsError if HttposClients returns 403", async () => {
   const { sut, httpClientSpy } = makeSut()

   httpClientSpy.statusCode = HttpStatusCode.forbidden

   const promise = sut.fetch(mockGetaway())

   await expect(promise).rejects.toThrow(new ForbiddenError('jwt malformed'))
})
it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
   const { sut, httpClientSpy } = makeSut()

   httpClientSpy.statusCode = HttpStatusCode.serverError

   const promise = sut.fetch(mockGetaway())

   await expect(promise).rejects.toThrow(new UnexpectedError("Unexpected error"))
})
it("Should be able throw AccountModel if HttposClients returns 200", async () => {
   const { sut, httpClientSpy } = makeSut()
   const httpResult = mockGetawayModel()

   const httpResponse = await httpClientSpy.request({
      url: faker.internet.url(),
      method: 'post',
      body: httpResult
   })

   const account = await sut.fetch(mockGetaway())

   expect(account).toEqual(httpResponse.body)
})
})
