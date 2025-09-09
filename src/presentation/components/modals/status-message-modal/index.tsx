import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "../../ui"
import { useStatusMessageModal } from "./hooks/use-status-message-state"

// Função para definir as cores dos badges baseada no status
const getBadgeColor = (status: string) => {
   switch (status) {
      case "PRE_REGISTRATION":
         return "bg-blue-500"
      case "PENDING":
         return "bg-yellow-500"
      case "VERIFIED":
         return "bg-purple-500"
      case "APPROVED":
         return "bg-green-500"
      case "REJECTED_BY_ANALYST":
         return "bg-red-500"
      case "REJECTED_SERASA":
         return "bg-red-600"
      case "REJECTED_FACE_ID":
         return "bg-red-400"
      case "MANUAL_APPROVE":
         return "bg-orange-500"
      case "PRE REGISTRATION":
         return "bg-indigo-500"
      case "IMPORT_REGISTER":
         return "bg-gray-500"
      default:
         return "bg-gray-400"
   }
}

const statusData = [
   {
      status: "PRE_REGISTRATION",
      title: "Pré Registro",
      description:
         "O usuário está pré-registrado e aguardando que o analista realize o cadastro junto aos parceiros de pagamento.",
   },
   {
      status: "PENDING",
      title: "Aguardando Face ID",
      description: "O usuário está aguardando a verificação do Face ID.",
   },
   {
      status: "VERIFIED",
      title: "Autorizar pré cadastro",
      description:
         "Os documentos enviados pelo usuário estão sob análise, aguardando a revisão pelo analista responsável.",
   },
   {
      status: "APPROVED",
      title: "Aprovado",
      description: "O usuário foi aprovado e está apto para continuar.",
   },
   {
      status: "REJECTED_BY_ANALYST",
      title: "Rejeitado pelo analista",
      description: "O cadastro do usuário foi rejeitado por inconsistências nos dados.",
   },
   {
      status: "REJECTED_SERASA",
      title: "Rejeitado pelo SERASA",
      description: "O cadastro foi rejeitado por informações do SERASA.",
   },
   {
      status: "REJECTED_FACE_ID",
      title: "Face ID Rejeitado",
      description: "A verificação de Face ID do usuário foi rejeitada.",
   },
   {
      status: "MANUAL_APPROVE",
      title: "Aguardando Aprovação Manual",
      description: "O cadastro está aguardando aprovação manual por um analista.",
   },
   {
      status: "PRE REGISTRATION",
      title: "Aguardando parceiro",
      description: "O cadastro está aguardando aprovação do parceiro.",
   },
   {
      status: "IMPORT_REGISTER",
      title: "Usuário importado",
      description: "Este usuário foi importado por um analista, e ainda não realizou o Login.",
   },
]

export default function StatusLegendModal() {
   const { isOpen, close } = useStatusMessageModal()

   return (
      <Dialog open={isOpen} onOpenChange={close}>
         <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
               <DialogTitle className="text-xl font-bold">Legenda dos Status do Usuário</DialogTitle>
               <DialogDescription>Entenda o significado de cada status no sistema</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
               <ul className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
                  {statusData.map((item, index) => (
                     <li key={index} className="flex items-start p-3 rounded-lg border bg-card">
                        <span
                           className={`w-3 h-3 rounded-full inline-block mr-3 mt-1 flex-shrink-0 ${getBadgeColor(item.status)}`}
                        />
                        <div className="min-w-0">
                           <span className="font-semibold text-sm block mb-1">{item.title}:</span>
                           <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </DialogContent>
      </Dialog>
   )
}
