export type GetawayModel = {
   Data: {
      StatusContaDigital: string
      ListaDocumentosCadastrados: {
         CodigoDocumento: number
         TipoDocumento: number
         DescricaoDocumento: string
         StatusDocumento: string
         TipoPessoa: string
         NomeArquivo: string
         ArquivoBase64: string
         MotivoDevolucao: string
      }[]
   }  
   ResultCode: number
   Message: string
   ValidationData: {
      ResultCode: number
      Message: string
      Errors: {
         ErrorMessage: string
         FieldName: string
      }[]
   }
}
