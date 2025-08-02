import type React from "react"
import type { UseFormReturn } from "react-hook-form"


export const formatCurrency = (value: number) => {
   return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(value)
}

export function formatZipCode(value: string): string {
   const cep = value?.replace(/\D/g, "")?.slice(0, 8)
   return cep.length <= 5
      ? cep
      : `${cep?.slice(0, 5)}-${cep?.slice(5)}`
}

export function formatCardNumber(value: string): string {
   return value
      ?.replace(/\D/g, "")
      ?.slice(0, 16)
      ?.replace(/(.{4})/g, "$1 ")
      .trim()
}

export function formatDate(date: string | Date): string {
   return Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
   }).format(new Date(date))
}

export function formatCpf(cpf: string): string {
   const digits = cpf?.replace(/\D/g, "")?.slice(0, 11)

   if (digits?.length <= 3) return digits
   if (digits?.length <= 6) return `${digits?.slice(0, 3)}.${digits?.slice(3)}`
   if (digits?.length <= 9) return `${digits?.slice(0, 3)}.${digits?.slice(3, 6)}.${digits?.slice(6)}`
   return `${digits?.slice(0, 3)}.${digits?.slice(3, 6)}.${digits?.slice(6, 9)}-${digits?.slice(9)}`
}

export const formatExpirationDate = (e: React.ChangeEvent<HTMLInputElement>, form: UseFormReturn) => {
   let value = e.target.value?.replace(/\D/g, "")
   if (value.length > 2) {
      value = value?.slice(0, 2) + "/" + value?.slice(2, 4)
   }
   e.target.value = value
   form.setValue("expiration", value, { shouldValidate: true })
}

export function formatCnpj(value: string): string {
   const digits = value?.replace(/\D/g, "")?.slice(0, 14)

   if (digits?.length <= 2) return digits
   if (digits?.length <= 5) return `${digits?.slice(0, 2)}.${digits?.slice(2)}`
   if (digits?.length <= 8) return `${digits?.slice(0, 2)}.${digits?.slice(2, 5)}.${digits?.slice(5)}`
   if (digits?.length <= 12) return `${digits?.slice(0, 2)}.${digits?.slice(2, 5)}.${digits?.slice(5, 8)}/${digits?.slice(8)}`
   return `${digits?.slice(0, 2)}.${digits?.slice(2, 5)}.${digits?.slice(5, 8)}/${digits?.slice(8, 12)}-${digits?.slice(12)}`
}

export function formatPhoneNumber(value: string): string {
   const digits = value?.replace(/\D/g, "")?.slice(0, 11)

   if (!value) return ""

   if (digits?.length <= 2) return `(${digits}`
   if (digits?.length <= 7) return `(${digits?.slice(0, 2)}) ${digits?.slice(2)}`

   return `(${digits?.slice(0, 2)}) ${digits?.slice(2, 7)}-${digits?.slice(7)}`
}

export function formatCnae(value: string): string {
   const digits = value?.replace(/\D/g, "")?.slice(0, 7)

   if (digits?.length <= 4) return digits
   if (digits?.length <= 5) return `${digits?.slice(0, 4)}-${digits?.slice(4)}`
   return `${digits?.slice(0, 4)}-${digits?.slice(4, 5)}/${digits?.slice(5)}`
}