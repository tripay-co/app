import { Badge } from "@/react/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/react/components/ui/table"
import { AlertTriangle, TrendingDown, Calendar, DollarSign, Building2, MapPin } from "lucide-react"
import { useFetchSerasaDetail } from "./hooks/use-fetch-all-divide"
import CreditAnalysisSkeleton from "./components/skeleton"
import { TabsContent } from "@/react/components/ui/tabs"


export function DivideTab() {
   const { serasaDetail, isLoading } = useFetchSerasaDetail()

   const spcData = Array.isArray(serasaDetail) && serasaDetail[0] ? serasaDetail[0] : []
   const scoreData = Array.isArray(serasaDetail) && serasaDetail[1] ? serasaDetail[1] : []

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("pt-BR")
   }

   const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL",
      }).format(value)
   }

   const totalDebt = spcData?.items?.reduce((sum: any, item: any) => sum + item.value, 0)

   const getScoreColor = (classe: string) => {
      switch (classe) {
         case "A":
            return "bg-green-500"
         case "B":
            return "bg-yellow-500"
         case "C":
            return "bg-orange-500"
         case "D":
            return "bg-red-500"
         default:
            return "bg-gray-500"
      }
   }

   return (
      <TabsContent value="serasa">
         {isLoading ? (
            <CreditAnalysisSkeleton />
         ) : (
            <Card className="min-h-screen bg-white p-6 shadow-none">
               <div className=" mx-auto space-y-6">
                  <div className=" space-y-2">
                     <h1 className="text-3xl font-bold text-gray-900">Análise de Crédito</h1>
                     <p className="text-gray-600">Relatório detalhado de registros SPC e Score de crédito</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                     <Card className="shadow-none">
                        <CardContent className="p-6">
                           <div className="flex items-center space-x-2">
                              <AlertTriangle className="h-5 w-5 text-red-500" />
                              <div>
                                 <p className="text-sm font-medium text-gray-600">Total de Registros</p>
                                 <p className="text-2xl font-bold text-red-600">{spcData?.total_quantity || "0"}</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="shadow-none">
                        <CardContent className="p-6">
                           <div className="flex items-center space-x-2">
                              <DollarSign className="h-5 w-5 text-orange-500" />
                              <div>
                                 <p className="text-sm font-medium text-gray-600">Total em Débito</p>
                                 <p className="text-2xl font-bold text-orange-600">{totalDebt ? formatCurrency(totalDebt) : "R$ 0,00"}</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="shadow-none">
                        <CardContent className="p-6">
                           <div className="flex items-center space-x-2">
                              <TrendingDown className="h-5 w-5 text-blue-500" />
                              <div>
                                 <p className="text-sm font-medium text-gray-600">Score SPC</p>
                                 <p className="text-2xl font-bold text-blue-600">{scoreData?.score?.score || "Não informado"}</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                     <Card className="shadow-none">
                        <CardContent className="p-6">
                           <div className="flex items-center space-x-2">
                              <Calendar className="h-5 w-5 text-purple-500" />
                              <div>
                                 <p className="text-sm font-medium text-gray-600">Última Ocorrência</p>
                                 <p className="text-sm font-bold text-purple-600">{
                                    spcData?.last_occurrence ? formatDate(spcData?.last_occurrence) : "Não informado"}</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
                  <Card className="shadow-none">
                     <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                           <TrendingDown className="h-5 w-5" />
                           <span>Score de Crédito SPC</span>
                        </CardTitle>
                        <CardDescription>Análise detalhada do score de crédito</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                           <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">Score</p>
                              <div className="text-3xl font-bold text-blue-600">{scoreData?.score?.score || "Não informado"}</div>
                           </div>
                           <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">Classe</p>
                              <Badge variant="default" className={`${getScoreColor(scoreData?.score?.classe)} text-white text-lg px-3 py-1`}>
                                 {scoreData?.score?.classe || "N/A"}
                              </Badge>
                           </div>
                           <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">Horizonte</p>
                              <div className="text-xl font-semibold">{scoreData?.score?.horizonte ? `${scoreData?.score?.horizonte} meses` : "Não informado"}</div>
                           </div>
                           <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">Probabilidade</p>
                              <div className="text-xl font-semibold">{scoreData?.score?.probabilidade ? `${scoreData?.score?.probabilidade.toFixed(2)}%` : "Não informado"}</div>
                           </div>
                           <div className="text-center">
                              <p className="text-sm text-gray-600 mb-1">Tipo Cliente</p>
                              <Badge variant="default" className={scoreData?.score?.tipo_cliente_score === "RESTRITO" ? "destructive" : "default"}>
                                 {scoreData?.score?.tipo_cliente_score || "Não informado"}
                              </Badge>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                  <Card className="shadow-none">
                     <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                           <AlertTriangle className="h-5 w-5" />
                           <span>Registros SPC ({spcData?.total_quantity || 0} registros)</span>
                        </CardTitle>
                        <CardDescription>Detalhamento dos registros negativos encontrados</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className="overflow-x-auto">
                           <Table>
                              <TableHeader>
                                 <TableRow>
                                    <TableHead>Data Inclusão</TableHead>
                                    <TableHead>Empresa</TableHead>
                                    <TableHead>Contrato</TableHead>
                                    <TableHead>Vencimento</TableHead>
                                    <TableHead>Valor</TableHead>
                                    <TableHead>Localização</TableHead>
                                    <TableHead>Tipo</TableHead>
                                 </TableRow>
                              </TableHeader>
                              <TableBody>
                                 {spcData?.items?.length > 0 ? (
                                    spcData?.items?.map((item: any, index: any) => (
                                       <TableRow key={index}>
                                          <TableCell className="font-medium">{item.inclusion_date ? formatDate(item.inclusion_date) : "Não informado"}</TableCell>
                                          <TableCell>
                                             <div className="flex items-center space-x-2">
                                                <Building2 className="h-4 w-4 text-gray-500" />
                                                <div>
                                                   <p className="font-medium text-sm">{item.associate_name || "Não informado"}</p>
                                                   <p className="text-xs text-gray-500">{item.entity_name || "Não informado"}</p>
                                                </div>
                                             </div>
                                          </TableCell>
                                          <TableCell className="font-mono text-sm">{item.contract || "Não informado"}</TableCell>
                                          <TableCell>{item.due_date ? formatDate(item.due_date) : "Não informado"}</TableCell>
                                          <TableCell className="font-semibold text-red-600">{item.value ? formatCurrency(item.value) : "R$ 0,00"}</TableCell>
                                          <TableCell>
                                             <div className="flex items-center space-x-1">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">
                                                   {item.associate_city && item.state ? `${item.associate_city}/${item.state}` :
                                                      item.state ? item.state : "Não informado"}
                                                </span>
                                             </div>
                                          </TableCell>
                                          <TableCell>
                                             <Badge className="badge-class" variant="outline">{item.buyer_guarantor || "Não informado"}</Badge>
                                          </TableCell>
                                       </TableRow>
                                    ))
                                 ) : (
                                    <TableRow>
                                       <TableCell colSpan={7} className="h-24 text-center">
                                          Nenhum registro encontrado
                                       </TableCell>
                                    </TableRow>
                                 )}
                              </TableBody>
                           </Table>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </Card>
         )}
      </TabsContent>
   )
}