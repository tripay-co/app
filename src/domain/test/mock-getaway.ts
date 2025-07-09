import { faker } from "@faker-js/faker"
import type { Getaway } from "../repositories/getaway"


export const mockGetaway = (): Getaway.Params => ({
   token: faker.internet.jwt()
})

export const mockGetawayModel = (): Getaway.Model => ({
   Data: {
      StatusContaDigital: faker.helpers.arrayElement(["PENDING", "APPROVED", "REJECTED"]),
      ListaDocumentosCadastrados: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
         CodigoDocumento: faker.number.int({ min: 1000, max: 9999 }),
         TipoDocumento: faker.number.int({ min: 1, max: 5 }),
         DescricaoDocumento: faker.lorem.sentence(),
         StatusDocumento: faker.helpers.arrayElement(["PENDING", "APPROVED", "REJECTED"]),
         TipoPessoa: faker.helpers.arrayElement(["FISICA", "JURIDICA"]),
         NomeArquivo: faker.system.fileName(),
         ArquivoBase64: faker.string.alphanumeric(100),
         MotivoDevolucao: faker.lorem.sentence(),
      })),
   },
   ResultCode: faker.number.int({ min: 0, max: 1 }),
   Message: faker.lorem.sentence(),
   ValidationData: {
      ResultCode: faker.number.int({ min: 0, max: 1 }),
      Message: faker.lorem.sentence(),
      Errors: Array.from({ length: faker.number.int({ min: 0, max: 3 }) }, () => ({
         ErrorMessage: faker.lorem.sentence(),
         FieldName: faker.lorem.word(),
      })),
   }
})