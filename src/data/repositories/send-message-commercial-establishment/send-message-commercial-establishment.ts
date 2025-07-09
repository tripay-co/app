
import type { SendMessageCommercialEstablishment, SendMessageCommercialEstablishmentRepository } from '@/domain/repositories/send-message-commercial-establishment'
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { BadRequestError, ForbiddenError, UnexpectedError } from '@/domain/errors'


export class SendMessageCommercialEstablishmentRepositoryImpl implements SendMessageCommercialEstablishmentRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async send(params: SendMessageCommercialEstablishment.Params): Promise<SendMessageCommercialEstablishment.Model> {
      const httpResponse = await this.httpClient.request({
         url: this.url,
         method: 'post',
         body: {
            phone: params.phone,
            title: params.title,
            message: params.message
         },
         headers: {
            Authorization: `Bearer ${params.token}`
         }
      })
      // send - whatsapp - message
      switch (httpResponse.statusCode) {
         case HttpStatusCode.ok: return
         case HttpStatusCode.badRequest: throw new BadRequestError("Erro ao enviar mensagem")
         case HttpStatusCode.forbidden: throw new ForbiddenError("jwt malformed")
         default:
            throw new UnexpectedError("Unexpected error")
      }
   }

}
