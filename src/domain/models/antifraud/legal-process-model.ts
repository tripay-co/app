export type LegalProcessModel = {
   data_count: number;
   data: DataPayload;
};

/**
 * @param Define a estrutura para uma regra de validação.
 */
export type Regra = {
   rule_id: number;
   description?: string; 
   result: boolean;
};

/**
 * @param Estrutura do objeto 'data' principal.
 */
export type DataPayload = {
   regras: Regra[];
   processos: Processo[];
};

/**
 * @param Define a estrutura de um processo legal.
 */
export type Processo = {
   area?: string;
   valorCausa?: {
      moeda: string;
      valor: number;
   };
   grauProcesso?: number;
   urlProcesso?: string;
   sistema?: string;
   dataProcessamento?: string;
   partes?: {
      tipo: string;
      polo: 'ATIVO' | 'PASSIVO';
      advogados: {
         oab: {
            uf: string;
            numero: number;
            tipo?: string;
         };
         tipo: string;
         cpf: string;
         nome: string;
      }[]
      nome: string;
      cpf?: string;
   }[]
   tribunal?: string;
   juiz?: string;
   uf?: string;
   segmento?: string;
   dataDistribuicao?: string;
   movimentos?: {
      data: string;
      indice: number;
      eMovimento: boolean;
      nomeOriginal: string[];
   }[]
   processosRelacionados?: {
      numeroProcesso: string;
   }[]
   classeProcessual?: {
      nome: string;
      codigoCNJ?: string | number;
   };
   orgaoJulgador?: string;
   eProcessoDigital?: boolean;
   numeroProcessoUnico?: string;
   statusObservacao?: string;
   assuntosCNJ?: {
      titulo: string;
      codigoCNJ?: string | number;
   }[]
   status?: {
      ramoDireito: string;
      statusProcesso: string;
      julgamentos: {
         dataJulgamento: string;
         statusJulgamento: string;
         diasAteJulgamento: number;
         tipoJulgamento: string;
      }[]
      valorExecucao?: {
         moeda: string;
         valor: number;
      };
      dataTransitoJulgado?: string;
      dataArquivamento?: string;
   };
   unidadeOrigem?: string;
};
