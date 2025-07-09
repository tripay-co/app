import { Button } from "@/react/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/react/components/ui/card"
import { Separator } from "@/react/components/ui/separator"
import { TabsContent } from "@/react/components/ui/tabs"
import {

   Edit,
} from "lucide-react"
import type { BasicInfoTabArgsType } from "./types"
import { formatCnpj, formatCpf, formatDate } from "@/react/utils/formater"



export const BasicInfoTab = ({ user }: BasicInfoTabArgsType) => {
   return (
      <TabsContent value="basic" className="space-y-4 lg:space-y-6">
         <Card className="bg-white">
            <CardHeader className="pb-4">
               <CardTitle className="text-lg lg:text-xl">Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">CPF</label>
                     <p className="text-sm text-gray-900 break-all">{formatCpf(user?.cpf)}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">CNPJ</label>
                     <p className="text-sm text-gray-900 break-all">{formatCnpj(user?.cnpj)}</p>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Vencimento</label>
                     <p className="text-sm text-gray-900">{user?.vencimento ? formatDate(new Date(user.vencimento)) : 'N/A'}</p>
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Data de cadastro</label>
                  <p className="text-sm text-gray-900">{user?.registrationDate ? formatDate(new Date(user.registrationDate)) : 'N/A'}</p>
               </div>
               <Separator />
               <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">Informações da empresa</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">CNPJ da empresa</label>
                           <p className="text-sm text-gray-900 break-all">{formatCnpj(user?.cnpj)}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Nome Fantasia</label>
                           <p className="text-sm text-gray-900">{user?.nomeFantasia}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">CNAE</label>
                           <p className="text-sm text-gray-900">{user?.cnae}</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Razão social</label>
                           <p className="text-sm text-gray-900">{user?.social_reason}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Data da fundação</label>
                           <p className="text-sm text-gray-900">{user?.dataFundacao ? formatDate(new Date(user.dataFundacao)) : 'N/A'}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <Separator />
               <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                     <h3 className="text-base lg:text-lg font-semibold text-gray-900">Endereço</h3>
                     <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                     </Button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Rua</label>
                           <p className="text-sm text-gray-900 break-all">{user?.address?.endereco}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Cidade</label>
                           <p className="text-sm text-gray-900">{user?.address?.cidade}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Número</label>
                           <p className="text-sm text-gray-900">{user?.address?.numero}</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Estado</label>
                           <p className="text-sm text-gray-900">{user?.address?.estado}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">País</label>
                           <p className="text-sm text-gray-900">Brasil</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Complemento</label>
                           <p className="text-sm text-gray-900">{user?.address?.complemento || "Não informado"}</p>
                        </div>
                     </div>
                    
                  </div>
               </div>
               <Separator />
               <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                     <h3 className="text-base lg:text-lg font-semibold text-gray-900">Endereço comercial</h3>
                     <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                     </Button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Rua</label>
                           <p className="text-sm text-gray-900 break-all">{user?.address_company?.endereco}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Cidade</label>
                           <p className="text-sm text-gray-900">{user?.address_company?.cidade}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Número</label>
                           <p className="text-sm text-gray-900">{user?.address_company?.numero}</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Estado</label>
                           <p className="text-sm text-gray-900">{user?.address_company?.estado}</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">País</label>
                           <p className="text-sm text-gray-900">Brasil</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-700">Complemento</label>
                           <p className="text-sm text-gray-900">{user?.address_company?.complemento || "Não informado"}</p>
                        </div>
                     </div>

                  </div>
               </div>
            </CardContent>
         </Card>
      </TabsContent>
   )
}