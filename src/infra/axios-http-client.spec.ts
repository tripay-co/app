import { faker } from "@faker-js/faker"
import type { Mocked} from "vitest"
import { beforeEach, describe, expect, it, vitest } from "vitest"
import axios, { HttpStatusCode } from "axios"
import { AxiosHttpClient } from "./axios-http-client"


vitest.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>

describe("AxiosHttpClient", () => {
   beforeEach(() => {
      mockedAxios.request.mockClear()
   })

   it("Should be able to call axios.request with correct values", async () => {
      const url = faker.internet.url()
      const mockRequestBody = {
         email: faker.internet.email(),
         password: faker.internet.password()
      }

      const mockResponse = {
         data: 'any_data',
         status: HttpStatusCode.Ok
      }
      mockedAxios.request.mockResolvedValue(mockResponse)

      const sut = new AxiosHttpClient()
      const result = await sut.request({
         url,
         method: 'post',
         body: mockRequestBody
      })

      expect(mockedAxios.request).toHaveBeenCalledWith({
         url,
         method: 'post',
         data: mockRequestBody,
         headers: undefined
      })

      expect(result).toEqual({
         statusCode: 200,
         body: 'any_data'
      })
   })

   it("Should handle errors correctly", async () => {
      const url = faker.internet.url()

      const mockError = {
         response: {
            data: 'error_message',
            status: HttpStatusCode.BadRequest
         }
      }
      mockedAxios.request.mockRejectedValue(mockError)

      const sut = new AxiosHttpClient()
      const result = await sut.request({
         url,
         method: 'post',
         body: { test: 'data' }
      })

      expect(result).toEqual({
         statusCode: 400,
         body: 'error_message'
      })
   })

   it("Should handle axios errors without response", async () => {
      const url = faker.internet.url()

      const mockError = new Error('Network Error')
      mockedAxios.request.mockRejectedValue(mockError)

      const sut = new AxiosHttpClient()

      try {
         await sut.request({
            url,
            method: 'get',
            body: undefined
         })
      } catch (error) {
         expect(error).toBeDefined()
      }
   })
})