import SendWhatsappMessageModal from "@/react/components/modals/send-message-modal"
import { TableUsers } from "./components/table-users"
import StatusLegendModal from "@/react/components/modals/status-message-modal"
import { Card, CardContent, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react/components/ui"
import useSearch from "@/react/hooks/use-search"
import { Filter, Search } from "lucide-react"


export function ListUsers() {
   const { handleSearch, getAllSearchParams } = useSearch()
   const {
      name,
      tranding_name,
      status,
      cpf,
      cnpj,
      email,
      link,
   } = getAllSearchParams()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearch({
         [event.target.id]: event.target.value,
      })
   }

   return (
      <div className="mt-4">
         <div className="p-6">
            <Card className="mb-4">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <Filter className="w-5 h-5" />
                     Filtros
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="nome">Nome</Label>
                        <div className="relative">
                           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Input
                              id="name"
                              placeholder="Filtrar por nome"
                              className="pl-10"
                              onChange={(e) => handleSearch({ name: e.target.value, page: 1 })}
                              value={name || ""}
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                        <div className="relative">
                           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Input
                              id="nomeFantasia"
                              placeholder="Filtrar por nome fantasia"
                              className="pl-10"
                              onChange={handleChange}
                              value={tranding_name || ""}

                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Input
                              id="email"
                              placeholder="Filtrar por email"
                              className="pl-10"
                              onChange={handleChange}
                              value={email || ""}
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <div className="relative">
                           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Input
                              id="cpf"
                              placeholder="Filtrar por CPF"
                              className="pl-10"
                              onChange={handleChange}
                              value={cpf || ""}
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <div className="relative">
                           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Input
                              id="cnpj"
                              placeholder="Filtrar por CNPJ"
                              className="pl-10"
                              onChange={handleChange}
                              value={cnpj || ""}
                           />
                        </div>
                     </div>

                     <div className="">
                        <Label className='font-bold mb-2' htmlFor="status-filter">Status</Label>
                        <Select
                           onValueChange={(value) =>
                              handleSearch({ status: value === "ALL" ? "" : value, page: 1 })
                           }
                           value={status || "ALL"}
                        >
                           <SelectTrigger id="status-filter" className="w-full">
                              <SelectValue placeholder="Selecione o status" />
                           </SelectTrigger>
                           <SelectContent className="">
                              <SelectItem value="ALL">Todos</SelectItem>
                              <SelectItem value="APPROVED">Aprovado</SelectItem>
                              <SelectItem value="APPROVED_WITH_SERASA">
                                 Aprovado com Serasa
                              </SelectItem>
                              <SelectItem value="REJECTED_BY_ANALYST">
                                 Rejeitado pelo analista
                              </SelectItem>
                              <SelectItem value="REJECTED_SERASA">
                                 Rejeitado pelo Serasa
                              </SelectItem>
                              <SelectItem value="REJECTED_FACE_ID">
                                 Face ID rejeitado
                              </SelectItem>
                              <SelectItem value="MANUAL_APPROVE">Aprovado Manual</SelectItem>
                              <SelectItem value="PENDING">Face ID Pendente</SelectItem>
                              <SelectItem value="VERIFIED">Autorizar pré cadastro</SelectItem>
                              <SelectItem value="PRE_REGISTRATION">
                                 Aguardando parceiro
                              </SelectItem>
                           </SelectContent>
                        </Select>
                     </div>

                     <div>
                        <Label className='font-bold mb-2' htmlFor="link-filter">Status do Link</Label>
                        <Select
                           onValueChange={(value) => {
                              handleSearch({ link: value === "ALL" ? "" : value, page: 1 })
                           }}
                           value={link || "ALL"}
                        >
                           <SelectTrigger id="link-filter" className="w-full">
                              <SelectValue placeholder="Selecione o status" />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value="ALL">Todos</SelectItem>
                              <SelectItem value="NONE">Nenhum</SelectItem>
                              <SelectItem value="MIDDLE">Entre 2 e 5 dias</SelectItem>
                              <SelectItem value="FULL">Mais de 5 dias</SelectItem>
                           </SelectContent>
                        </Select>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
         <TableUsers />
         <SendWhatsappMessageModal />
         <StatusLegendModal />
      </div>
   )
}