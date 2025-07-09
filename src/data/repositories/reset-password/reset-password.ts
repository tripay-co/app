
import type { ResetPassword, ResetPasswordRepository } from '@/domain/repositories/reset-password'
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { BadRequestError, UnauthorizedError, UnexpectedError } from '@/domain/errors'


export class ResetPasswordRepositoryImpl implements ResetPasswordRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async reset(params: ResetPassword.Params): Promise<ResetPassword.Model> {
      const httpRepsonse = await this.httpClient.request({
         url: this.url,
         method: 'post',
         body: params
      })

      switch (httpRepsonse.statusCode) {
         case HttpStatusCode.ok: return httpRepsonse.body as ResetPassword.Model
         case HttpStatusCode.unauthorized: throw new UnauthorizedError("Unauthorized")
         case HttpStatusCode.badRequest: throw new BadRequestError(JSON.stringify(httpRepsonse.body, null, 2))
         default: throw new UnexpectedError("Unexpected error")
      }
   }
}
