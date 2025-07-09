import { Card, CardContent, CardHeader, CardTitle } from "@/react/components/ui/card"
import { TabsContent } from "@/react/components/ui/tabs"
import type { BankingTabArgsType } from "./types"
import { Button } from "@/react/components/ui"
import { Edit } from "lucide-react"


export function BankingTab({ infoBank }: BankingTabArgsType) {
   return (
      <TabsContent value="banking">
         <Card>
            <CardHeader className="flex items-center justify-between">
               <CardTitle className="text-lg lg:text-xl">Informações Bancárias</CardTitle>
               <div>
                  <Button variant="ghost" size="sm">
                     <Edit className="w-4 h-4 mr-2" />
                     Editar
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Tipo de conta</label>
                     <p className="text-sm text-gray-900 break-all">{infoBank.tipoConta}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Banco</label>
                     <p className="text-sm text-gray-900 break-all">{infoBank.banco}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Agência</label>
                     <p className="text-sm text-gray-900">{infoBank.agencia}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Favorecido</label>
                     <p className="text-sm text-gray-900">{infoBank.favored}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Conta</label>
                     <p className="text-sm text-gray-900">{infoBank.conta}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Digito da agência</label>
                     <p className="text-sm text-gray-900">{infoBank.dgAgencia}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Digito da conta</label>
                     <p className="text-sm text-gray-900">teste</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Bandeira cartão</label>
                     <p className="text-sm text-gray-900">{infoBank.bandeira}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-smtext-gray-700 font-bold">Faturamento mensal</label>
                     <p className="text-sm text-gray-900">{infoBank.faturamento_mensal}</p>
                  </div>
               </div>
            </CardContent>
         </Card>
      </TabsContent>
   )
}