import { StatusEnum } from "@/@types/status"


const greenStatuses = new Set([
   StatusEnum.APPROVED,
   StatusEnum.APROVADO,
   StatusEnum.ATIVO,
   StatusEnum.PRE_REGISTRATION,
   StatusEnum.IMPORT_REGISTER,
   StatusEnum.APPROVED_WITH_SERASA,
   StatusEnum.PAYMENT_RELEASED,
   StatusEnum.APROVADA,
   StatusEnum.LIQUIDADO,
])

const yellowStatuses = new Set([
   StatusEnum.PENDING_FACEID,
   StatusEnum.PENDING,
   StatusEnum.PENDING_BUIER,
   StatusEnum.PENDING_ANALYST,
   StatusEnum.PENDING_TSHIELD,
   StatusEnum.MANUAL_APPROVE,
])

const orangeStatuses = new Set([
   StatusEnum.PENDING_ANALYST,
])

const redStatuses = new Set([
   StatusEnum.REJECTED_BY_ANALYST,
   StatusEnum.REJECTED,
   StatusEnum.REJEITADO,
   StatusEnum.REJECTED_FACE_ID,
   StatusEnum.REJECTED_SERASA,
   StatusEnum.REJECTED_3DS,
   StatusEnum.CANCELED,
   StatusEnum.CANCELADA,
   StatusEnum.ERROR_RELEASED_PAYMENT,
   StatusEnum.EXPIRED,
   StatusEnum.ACCOUNT_CANCELED,
   StatusEnum.NAO_LIQUIDADO,
])

const specialColors: Record<string, string> = {
   [StatusEnum.ATIVO_COM_SERASA]: "bg-[#AAD019]",
   [StatusEnum.APPROVED_WITH_SERASA]: "bg-[#AAD019]",
}

export function getBadgeColor(status: string): string {
   if (specialColors[status]) return specialColors[status]
   if (greenStatuses.has(status as StatusEnum)) return "bg-green-500"
   if (yellowStatuses.has(status as StatusEnum)) return "bg-yellow-500"
   if (orangeStatuses.has(status as StatusEnum)) return "bg-orange-500"
   if (redStatuses.has(status as StatusEnum)) return "bg-red-500"
   if (status === StatusEnum.VERIFIED) return "bg-blue-500"
   return "bg-gray-500"
}
