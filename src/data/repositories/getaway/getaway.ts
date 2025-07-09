
import type { Getaway, GetawayRepository } from '@/domain/repositories/getaway'
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { ForbiddenError, UnexpectedError } from '@/domain/errors'


export class GetawayRepositoryImpl implements GetawayRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async fetch(params: Getaway.Params): Promise<Getaway.Model> {
      const httpResponse = await this.httpClient.request({
         url: this.url,
         method: 'get',
         headers: {
            Authorization: `Bearer ${params.token}`
         }
      })

      switch (httpResponse.statusCode) {
         case HttpStatusCode.ok:
            return httpResponse.body as Getaway.Model
         case HttpStatusCode.forbidden:
            throw new ForbiddenError("jwt malformed")
         default:
            throw new UnexpectedError("Unexpected error")
      }
   }

}
