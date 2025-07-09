
import type { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocol/http-client'
import type { AxiosResponse } from 'axios'
import axios from 'axios'


export class AxiosHttpClient implements HttpClient {
   async request(data: HttpRequest): Promise<HttpResponse> {
      let axiosResponse: AxiosResponse
      try {
         axiosResponse = await axios.request({
            url: data.url,
            method: data.method,
            data: data.body,
            params: data.params,
            headers: data.headers
         })
      } catch (error: any) {
         axiosResponse = error.response
      }
      return {
         statusCode: axiosResponse.status as HttpStatusCode,
         body: axiosResponse.data
      }
   }
}