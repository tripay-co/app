import type { LegalProcess } from '@/domain/repositories/antifraud/process'
import { faker } from '@faker-js/faker'


export const mockLegalProcess = (): LegalProcess.Params => ({
   id: faker.number.int({ min: 1, max: 1000 })
})

export const mockLegalProcessModel = (): LegalProcess.Model => ({
    data_count: 2,
  data: {
    regras: [
      {
        rule_id: 101,
        description: "Verifica se possui processos ativos",
        result: true,
      },
      {
        rule_id: 102,
        description: "Análise de risco de crédito",
        result: false,
      },
      {
        rule_id: 103,
        result: true, 
      },
    ],
    processos: [
      {
        area: "CÍVEL - DIREITO DO CONSUMIDOR",
        valorCausa: {
          moeda: "R$",
          valor: 15750.99,
        },
        grauProcesso: 1,
        urlProcesso: "https://sitedotribunal.jus.br/processo/12345678920248260100",
        sistema: "E-SAJ",
        dataProcessamento: "2025-07-04T21:00:00.123Z",
        partes: [
          {
            tipo: "REQUERENTE",
            polo: "ATIVO",
            nome: "João da Silva Sauro",
            cpf: "123.456.789-00",
            advogados: [
              {
                oab: { uf: "SP", numero: 123456 },
                tipo: "ADVOGADO",
                cpf: "987.654.321-00",
                nome: "Dr. Carlos Alberto de Nobrega",
              },
            ],
          },
          {
            tipo: "REQUERIDO",
            polo: "PASSIVO",
            nome: "Empresa de Telefonia S.A.",
            advogados: [],
          },
        ],
        tribunal: "TJ-SP",
        juiz: "Dra. Ana Maria P. de Almeida",
        uf: "SP",
        segmento: "JUSTIÇA ESTADUAL",
        dataDistribuicao: "2024-03-15T14:30:00Z",
        movimentos: [
            {
                data: "2025-06-20T10:00:00Z",
                indice: 2,
                eMovimento: true,
                nomeOriginal: ["Juntada de Petição"],
            },
            {
                data: "2024-03-15T14:30:00Z",
                indice: 1,
                eMovimento: true,
                nomeOriginal: ["Distribuído por Sorteio"],
            },
        ],
        processosRelacionados: [],
        classeProcessual: {
          nome: "PROCEDIMENTO DO JUIZADO ESPECIAL CÍVEL",
          codigoCNJ: "436",
        },
        orgaoJulgador: "3ª Vara do Juizado Especial Cível de São Paulo",
        eProcessoDigital: true,
        numeroProcessoUnico: "1234567-89.2024.8.26.0100",
        statusObservacao: "MOVIMENTO",
        assuntosCNJ: [
          {
            titulo: "DIREITO DO CONSUMIDOR",
            codigoCNJ: "1156",
          },
          {
            titulo: "TELEFONIA",
            codigoCNJ: "4864",
          },
        ],
        status: {
          ramoDireito: "DIREITO DO CONSUMIDOR",
          statusProcesso: "EM TRAMITAÇÃO",
          julgamentos: [],
        },
        unidadeOrigem: "FORO CENTRAL CÍVEL",
      },
      {
        area: "TRABALHISTA",
        valorCausa: {
          moeda: "R$",
          valor: 8500.0,
        },
        grauProcesso: 1,
        tribunal: "TRT-2",
        juiz: "Dr. Roberto Medeiros",
        uf: "SP",
        segmento: "JUSTIÇA DO TRABALHO",
        dataDistribuicao: "2022-01-10T09:00:00Z",
        classeProcessual: {
          nome: "AÇÃO TRABALHISTA - RITO ORDINÁRIO",
          codigoCNJ: "985",
        },
        eProcessoDigital: true,
        numeroProcessoUnico: "9876543-21.2022.5.02.0010",
        statusObservacao: "BAIXADO",
        status: {
          ramoDireito: "DIREITO DO TRABALHO",
          statusProcesso: "ARQUIVAMENTO DEFINITIVO",
          julgamentos: [
            {
              dataJulgamento: "2023-05-30T16:00:00Z",
              statusJulgamento: "HOMOLOGAÇÃO DE ACORDO",
              diasAteJulgamento: 504,
              tipoJulgamento: "ACORDO",
            },
          ],
          dataTransitoJulgado: "2023-06-15T18:00:00Z",
          dataArquivamento: "2023-07-01T10:00:00Z",
        },
      },
    ],
  },
})
