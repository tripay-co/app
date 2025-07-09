

export type CommercialEstablishmentModel = {
   data: {
      date: string
      id: number
      emaiL: string
      name: string
      tranding_name: string
      status: string
      cnpj: string
      cpf: string
      phone: string
      transactions: Array<{
         id: number
         value: number
         date: string
         status: string
         type: string
         description: string
         bandeira?: string
         valor_a_cobrar?: number
         taxa_juros?: number
         valor_chargeback?: number
         custo_taxa?: number
         custo_link?: number
         valor_markup?: number
         vencimento_cartao?: string | null
         gateway?: string | null
         nsuOperacao?: string | null
         nsuPinbank?: string | null
         nsupagamento?: string | null
         tshield_id?: string | null
         error_message?: string | null
         assume_chargeback?: boolean
         payment_info?: string
         payment_info_date?: string
         analist_analysis_date?: string | null
         public_id?: string
         clear_sale_trasaction_id?: string
         status_tshield?: string | null
         status_clear_sale?: string | null
         analyse_id?: string | null
         entrepay_order?: string | null
         status_3ds?: string | null
         nome_cliente?: string
         cep_cliente?: string
         numero_casa_cliente?: string
         rua_cliente?: string
         bairro_cliente?: string
         cidade_cliente?: string
         estado_cliente?: string
         cpf_comprador?: string
         nome_solicitante?: string
         celular?: string
         titulo?: string
         descricao?: string
         valor_bruto?: string
         valor_liquido?: string
         parcelas?: string
         quem_pagou?: string
         created_at?: string
      }>
   }[]
   page: number
   pages: number
}
