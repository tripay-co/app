
import type { HttpClient} from '../../protocol/http-client'
import { HttpStatusCode } from '../../protocol/http-client'
import { ForbiddenError, UnexpectedError } from '@/domain/errors'
import type { CommercialEstablishment, CommercialEstablishmentRepository } from '@/domain/repositories/commercial-establishment'


export class CommercialEstablishmentRepositoryImpl implements CommercialEstablishmentRepository {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient
   ) { }

   async fetchAll(params: CommercialEstablishment.Params): Promise<CommercialEstablishment.Model> {
      const httpResponse = await this.httpClient.request({
         url: this.url,
         method: 'get',
         params: {
            page: params.page,
            name: params.name,
            tranding_name: params.tranding_name,
            data: params.data,
            status: params.status,
            cpf: params.cpf,
            cnpj: params.cnpj,
            email: params.email,
            link: params.link
         },
         headers: {
            Authorization: `Bearer ${params.token}`
         }
      })

      switch (httpResponse.statusCode) {
         case HttpStatusCode.ok:
            return httpResponse.body as CommercialEstablishment.Model
         case HttpStatusCode.forbidden:
            throw new ForbiddenError("jwt malformed")
         default:
            throw new UnexpectedError("Unexpected error")
      }
   }

}
