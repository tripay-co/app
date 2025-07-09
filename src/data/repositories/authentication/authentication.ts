
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import type { Authentication, AuthenticationRepository } from '@/domain/repositories/authentication'
import { BadRequestError, UnauthorizedError, UnexpectedError } from '@/domain/errors'


export class AuthenticationRepositoryImpl implements AuthenticationRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async auth(params: Authentication.Params): Promise<Authentication.Model> {
      const httpRepsonse = await this.httpClient.request({
         url: this.url,
         method: 'post',
         body: params
      })

      switch (httpRepsonse.statusCode) {
         case HttpStatusCode.ok: return httpRepsonse.body as Authentication.Model
         case HttpStatusCode.unauthorized: throw new UnauthorizedError("Unauthorized")
         case HttpStatusCode.badRequest: throw new BadRequestError(JSON.stringify(httpRepsonse.body, null, 2))
         default: throw new UnexpectedError("Unexpected error")
      }
   }
}
