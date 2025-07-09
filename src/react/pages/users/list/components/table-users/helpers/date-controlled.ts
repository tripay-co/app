import { differenceInDays, formatDistanceToNow, isValid } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"


export const isValidDate = (date: any): boolean => {
   if (!date) return false
   const parsedDate = new Date(date)
   return isValid(parsedDate)
}

export const dateDifference = (date: Date | string | null | undefined) => {
   if (!isValidDate(date)) {
      return "Nenhum link gerado"
   }

   const validDate = new Date(date!)
   return formatDistanceToNow(validDate, { locale: ptBR, addSuffix: true })
}

export const dayDifference = ({ date, days }: { date: Date | string | null | undefined, days: number }) => {
   if (!isValidDate(date)) {
      return false
   }

   const validDate = new Date(date!)
   const differenceDays = differenceInDays(new Date(), validDate)

   return differenceDays >= days
}
