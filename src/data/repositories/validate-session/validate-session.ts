
import type { ResetPassword } from '@/domain/repositories/reset-password'
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { ForbiddenError, UnexpectedError } from '@/domain/errors'
import type { ValidateSession, ValidateSessionRepository } from '@/domain/repositories/validate-session'


export class ValidateSessionRepositoryImpl implements ValidateSessionRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async validate(params: ValidateSession.Params): Promise<ValidateSession.Model> {
      const httpRepsonse = await this.httpClient.request({
         url: this.url,
         method: 'get',
         headers: `Authorization: Bearer ${params.token}`,
      })

      switch (httpRepsonse.statusCode) {
         case HttpStatusCode.ok: return httpRepsonse.body as ResetPassword.Model
         case HttpStatusCode.forbidden: throw new ForbiddenError("jwt malformed")
         default: throw new UnexpectedError("Unexpected error")
      }
   }
}
