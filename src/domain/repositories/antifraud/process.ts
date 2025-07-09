import type { LegalProcessModel } from "@/domain/models/antifraud/legal-process-model"


export namespace LegalProcess {
   export type Params = {
      id: number
   }

   export type Model = LegalProcessModel
}

export interface LegalProcessRepository {
   consult: (params: LegalProcess.Params) => Promise<LegalProcess.Model>
}
