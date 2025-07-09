import { StatusDisplayEnum, StatusEnum } from "@/@types/status"


export const StatusCategory = {
   APPROVED: [
      StatusEnum.APPROVED,
      StatusEnum.ATIVO,
      StatusEnum.APROVADO,
      StatusEnum.APPROVED_WITH_SERASA,
      StatusEnum.ATIVO_COM_SERASA,
      StatusEnum.APROVADA,
      StatusEnum.PAYMENT_RELEASED,
      StatusEnum.LIQUIDADO
   ],
   REJECTED: [
      StatusEnum.REJECTED,
      StatusEnum.REJECTED_BY_ANALYST,
      StatusEnum.REJECTED_FACE_ID,
      StatusEnum.REJECTED_SERASA,
      StatusEnum.REJEITADO,
      StatusEnum.REJECTED_3DS,
      StatusEnum.CANCELED,
      StatusEnum.CANCELADA,
      StatusEnum.ACCOUNT_CANCELED,
      StatusEnum.EXPIRED,
      StatusEnum.ERROR_RELEASED_PAYMENT,
      StatusEnum.NAO_LIQUIDADO
   ],
   PENDING: [
      StatusEnum.PENDING,
      StatusEnum.PENDING_BUIER,
      StatusEnum.PENDING_ANALYST,
      StatusEnum.PENDING_TSHIELD,
      StatusEnum.PENDING_FACEID,
      StatusEnum.VERIFIED,
      StatusEnum.MANUAL_APPROVE,
      StatusEnum.PRE_REGISTRATION,
      StatusEnum.IMPORT_REGISTER
   ]
} as const

export function getNameStatus(status: string): string {
   return StatusDisplayEnum[status as keyof typeof StatusDisplayEnum] || "PENDENTE"
}
export function isValidStatus(status: string): status is keyof typeof StatusEnum {
   return Object.values(StatusEnum).includes(status as StatusEnum)
}

export function getAllStatuses(): StatusEnum[] {
   return Object.values(StatusEnum)
}


