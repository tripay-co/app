

export interface BasicInfoTabArgsType {
   user: {
      cpf: string;
      vencimento: string;
      cnpj: string;
      social_reason: string;
      dataFundacao: string;
      cnae: string;
      email: string;
      registrationDate: string;
      nomeFantasia: string;
      dataNascimento: string;
      partners: string;
      type: string;
      address: {
         endereco: string;
         numero: string;
         cidade: string;
         estado: string;
         cep: string;
         bairro: string;
         complemento?: string;
      }
      address_company: {
         endereco: string;
         numero: string;
         cidade: string;
         estado: string;
         cep: string;
         bairro: string;
         complemento?: string;
      }
   }
}
