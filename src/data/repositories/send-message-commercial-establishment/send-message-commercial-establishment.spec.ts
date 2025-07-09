import { describe, expect, it } from "vitest"
import { mockAccountModel } from "@/domain/test/mock-account"
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from "../../test/mock-http-client"
import { HttpStatusCode } from "../../protocol/http-client"
import { BadRequestError, ForbiddenError, UnexpectedError } from "@/domain/errors"
import { SendMessageCommercialEstablishmentRepositoryImpl } from "./send-message-commercial-establishment"
import { mockSendMessageCommercialEstablishment } from "@/domain/test/mock-send-message-commercial-establishment"


type SutTypes = {
   sut: SendMessageCommercialEstablishmentRepositoryImpl
   httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy()
   const sut = new SendMessageCommercialEstablishmentRepositoryImpl(url, httpClientSpy)

   return {
      sut,
      httpClientSpy
   }
}

describe("Send message commercial establishment", () => {
   it("Should be able call HttPostClient with correct URL", async () => {
      const url = faker.internet.url()
      const { sut, httpClientSpy } = makeSut(url)

      await sut.send(mockSendMessageCommercialEstablishment())

      expect(httpClientSpy.url).toBe(url)
   })
   it("Should be able call HttpPostClient with correct HEADERS", async () => {
      const {token, title, message, phone} = mockSendMessageCommercialEstablishment()
      const { sut, httpClientSpy } = makeSut()

      await sut.send({
         token,
         title,
         message,
         phone
      })

      expect(httpClientSpy.headers).toMatchObject({ Authorization: `Bearer ${token}` })

   })
   it("Should be able call HttpPostClient with correct BODY", async () => {
      const { token, title, message, phone } = mockSendMessageCommercialEstablishment()
      const { sut, httpClientSpy } = makeSut()

      await sut.send({
         token,
         title,
         message,
         phone
      })


      expect(httpClientSpy.requestBody).toMatchObject({
         phone, 
         title, 
         message
      })

   })
   it("Should be able throw invalidCredentialsError if HttposClients returns 403", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.forbidden

      const promise = sut.send(mockSendMessageCommercialEstablishment())

      await expect(promise).rejects.toThrow(new ForbiddenError('jwt malformed'))
   })
   it("Should be able throw invalidCredentialsError if HttposClients returns 400", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.badRequest

      const promise = sut.send(mockSendMessageCommercialEstablishment())

      await expect(promise).rejects.toThrow(new BadRequestError('Erro ao enviar mensagem'))
   })
   it("Should be able throw UnexpectedError if HttposClients returns 500", async () => {
      const { sut, httpClientSpy } = makeSut()

      httpClientSpy.statusCode = HttpStatusCode.serverError

      const promise = sut.send(mockSendMessageCommercialEstablishment())

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

      const account = await sut.send(mockSendMessageCommercialEstablishment())

      expect(account).toEqual(httpResponse.body)
   })
})
