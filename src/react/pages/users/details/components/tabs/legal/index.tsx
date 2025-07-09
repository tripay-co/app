import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/react/components/ui/card"
import { Button } from "@/react/components/ui/button"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Check } from "lucide-react"
import { useOpenConsultProcessModal } from "@/react/components/modals/consult-process-legal-modal/store/consult-process-store"
import { useMutation } from "@tanstack/react-query"
import { BASE_URL } from "@/lib/axios"
import { ConsultProcessModal } from "@/react/components/modals/consult-process-legal-modal"
import { TabsContent } from "@/react/components/ui"


export function LegalTab() {
   const { id } = useParams()
   const { open } = useOpenConsultProcessModal()

   const { mutate, data, isPending } = useMutation({
      mutationKey: ["consult-process"],
      mutationFn: async () => {
         try {
            const { data } = await axios.post(
               `${BASE_URL}/consulta-processo-judicial/${id}`
            )

            return {
               result: data.data,
            }
         } catch (error) {
            console.log(error)
         }
      },
   })

   const { result } =
      data?.result?.regras.find((regra: any) => regra.rule_id === 275) ?? []
   const isInvolvedInTheProcess = result ?? false

   return (
      <TabsContent value="legal">
         <Card>
            <CardHeader>
               <CardTitle className="text-2xl">
                  Consulta de Processos Judiciais
               </CardTitle>
               <CardDescription className="flex justify-end">
                  <Button
                     className="bg-blue-500 hover:bg-blue-600"
                     onClick={() => mutate()}
                     disabled={isPending}
                  >
                     {isPending ? "Consultando..." : "Consultar processos"}
                  </Button>
               </CardDescription>
            </CardHeader>
            <CardContent>
               {!isPending && data ? (
                  <div className="flex justify-around p-4 border rounded-lg">
                     <div className="">
                        <div className="flex items-center gap-2 mb-2 flex-co">
                           {data && data.result.processos.length > 0 ? (
                              <Check className="w-6 h-6 text-green-500" />
                           ) : (
                              <Check className="w-6 h-6 text-red-500" />
                           )}
                           <span className="font-medium">Possui processo?</span>
                        </div>

                        <div className="ml-8 text-gray-500">
                           {data.result.processos
                              ? `Sim (${data.result.processos.length})`
                              : "Não"}
                        </div>
                        {data.result.processos && (
                           <Button
                              variant="secondary"
                              className="mt-4 text-white bg-blue-500 hover:bg-blue-600"
                              onClick={open}
                           >
                              Ver consulta
                           </Button>
                        )}
                     </div>
                     <div className="">
                        <div className="flex items-center gap-2 mb-2">
                           {data && isInvolvedInTheProcess ? (
                              <Check className="w-6 h-6 text-green-500" />
                           ) : (
                              <p className="text-red-500">X</p>
                           )}
                           <span className="font-medium">É réu em processo</span>
                        </div>
                        <div className="ml-8 text-gray-500">
                           {isInvolvedInTheProcess
                              ? `Sim (${data.result.processos.length})`
                              : "Não"}
                        </div>
                     </div>
                     <div className="">
                        <div className="flex items-center gap-2 mb-2">
                           {data.result.regras ? (
                              <Check className="w-6 h-6 text-green-500" />
                           ) : (
                              <Check className="w-6 h-6 text-green-500" />
                           )}
                           <span className="font-medium">Possui processo? (flag)</span>
                        </div>
                        <div className="ml-8 text-gray-500">
                           {data.result ? `Sim (${data.result.processos.length})` : "Não"}
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="flex justify-around p-4 border rounded-lg">
                     <p>Nenhum processo foi consultado</p>
                  </div>
               )}
            </CardContent>
         </Card>
         {data && <ConsultProcessModal process={data} />}
      </TabsContent>
   )
}
