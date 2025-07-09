
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { BadRequestError, UnauthorizedError, UnexpectedError } from '@/domain/errors'
import type { RecoverPassword, RecoverPasswordRepository } from '@/domain/repositories/recover-password'


export class RecoverPasswordRepositoryImpl implements RecoverPasswordRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async recover(params: RecoverPassword.Params): Promise<RecoverPassword.Model> {
      const httpRepsonse = await this.httpClient.request({
         url: this.url,
         method: 'post',
         body: params
      })

      switch (httpRepsonse.statusCode) {
         case HttpStatusCode.ok: return httpRepsonse.body as RecoverPassword.Model
         case HttpStatusCode.unauthorized: throw new UnauthorizedError("Unauthorized")
         case HttpStatusCode.badRequest: throw new BadRequestError(JSON.stringify(httpRepsonse.body, null, 2))
         default: throw new UnexpectedError("Unexpected error")
      }
   }
}
