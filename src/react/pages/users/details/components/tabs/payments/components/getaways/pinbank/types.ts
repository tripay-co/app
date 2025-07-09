
export interface PinbankDocumentsArgsType {
   Data: {
      StatusContaDigital: string;
      ListaDocumentosCadastrados: PinbankDocumentType[];
   }
   ResultCode: number;
   Message: string;
   ValidationData: {
      ResultCode: number;
      Message: string;
      Errors: {
         ErrorMessage: string;
         FieldName: string;
      }[];
   }
}

export type PinbankDocumentType = {
   CodigoDocumento: number;
   TipoDocumento: number;
   DescricaoDocumento: string;
   StatusDocumento: "PENDENTE" | "APROVADO" | "REJEITADO";
   TipoPessoa: "Fisica" | "Juridica";
   NomeArquivo: string;
   ArquivoBase64: string;
   MotivoDevolucao?: string;
}