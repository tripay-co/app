
import { ForbiddenError, UnexpectedError } from '@/domain/errors'
import { HttpStatusCode, type HttpClient } from '@/data/protocol/http-client'
import type { LegalProcess, LegalProcessRepository } from '@/domain/repositories/antifraud/process'


export class LegalProcessImpl implements LegalProcessRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async consult(params: LegalProcess.Params): Promise<LegalProcess.Model> {
      const httpResponse = await this.httpClient.request({
         url: `${this.url}/${params.id}`,
         method: 'get',
      })

      switch (httpResponse.statusCode) {
         case HttpStatusCode.ok:
            return httpResponse.body as LegalProcess.Model
         case HttpStatusCode.forbidden:
            throw new ForbiddenError("jwt malformed")
         default:
            throw new UnexpectedError("Unexpected error")
      }
   }

}
