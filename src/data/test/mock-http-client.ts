import type { HttpClient, HttpRequest, HttpResponse} from "../protocol/http-client"
import { HttpStatusCode } from "../protocol/http-client"


export class HttpClientSpy implements HttpClient {
   public statusCode: HttpStatusCode = HttpStatusCode.ok
   public requestBody?: any
   public responseBody?: any
   public url?: string
   public params?: any
   public headers?: any

   async request(data: HttpRequest): Promise<HttpResponse<any>> {
      this.url = data.url
      this.params = data.params
      this.headers = data.headers
      this.requestBody = data.body

      return {
         statusCode: this.statusCode,
         body: this.responseBody
      }
   }

   // TODO: implements method response
}