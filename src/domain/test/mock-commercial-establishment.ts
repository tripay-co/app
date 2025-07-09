import { faker } from '@faker-js/faker'
import type { CommercialEstablishment } from '../repositories/commercial-establishment'


export const mockCommercialEstablishment = (): CommercialEstablishment.Params => ({
   token: faker.string.uuid(),
   page: faker.number.int({ min: 1, max: 10 }),
})

export const mockCommercialEstablishmentModel = (): CommercialEstablishment.Model => ({
   data: Array.from({ length: 3 }, () => ({
      date: faker.date.past().toISOString(),
      id: faker.number.int(),
      emaiL: faker.internet.email(),
      name: faker.company.name(),
      tranding_name: faker.company.name(),
      status: 'APPROVED',
      cnpj: faker.string.numeric(14),
      cpf: faker.string.numeric(11),
      phone: faker.phone.number(),
      transactions: Array.from({ length: 5 }, () => ({
         id: faker.number.int(),
         value: faker.number.float({ min: 10, max: 1000 }),
         date: faker.date.recent().toISOString(),
         status: 'APPROVED',
         type: 'SALE',
         description: faker.lorem.sentence(),
         bandeira: faker.finance.creditCardIssuer(),
         valor_a_cobrar: faker.number.float({ min: 5, max: 500 }),
         taxa_juros: faker.number.float({ min: 0, max: 5 }),
         valor_chargeback: faker.number.float({ min: 0, max: 100 }),
         custo_taxa: faker.number.float({ min: 0, max: 50 }),
         custo_link: faker.number.float({ min: 0, max: 20 }),
         valor_markup: faker.number.float({ min: 0, max: 10 }),
         vencimento_cartao: faker.date.future().toISOString(),
         gateway: faker.company.name(),
         nsuOperacao: faker.string.alphanumeric(10),
         nsuPinbank: faker.string.alphanumeric(10),
         nsupagamento: faker.string.alphanumeric(10),
         tshield_id: faker.string.uuid(),
         error_message: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
         assume_chargeback: faker.datatype.boolean(),
         payment_info: faker.lorem.words(),
         payment_info_date: faker.date.recent().toISOString(),
         analist_analysis_date: faker.date.recent().toISOString(),
         public_id: faker.string.uuid(),
         clear_sale_trasaction_id: faker.string.uuid(),
         status_tshield: 'APPROVED',
         status_clear_sale: 'APPROVED',
         analyse_id: faker.string.uuid(),
         entrepay_order: faker.string.uuid(),
         status_3ds: 'REJECTED',
         nome_cliente: faker.person.fullName(),
         cep_cliente: faker.location.zipCode(),
         numero_casa_cliente: faker.string.numeric(3),
         rua_cliente: faker.location.street(),
         bairro_cliente: faker.location.street(),
         cidade_cliente: faker.location.city(),
         estado_cliente: faker.location.state(),
         cpf_comprador: faker.string.numeric(11),
         nome_solicitante: faker.person.fullName(),
         celular: faker.phone.number(),
         titulo: faker.lorem.words(2),
         descricao: faker.lorem.sentence(),
         valor_bruto: faker.finance.amount(),
         valor_liquido: faker.finance.amount(),
         parcelas: faker.string.numeric(2),
         quem_pagou: faker.person.fullName(),
         created_at: faker.date.past().toISOString()
      }))
   })),
   page: faker.number.int({ min: 1, max: 10 }),
   pages: faker.number.int({ min: 1, max: 10 })
})
