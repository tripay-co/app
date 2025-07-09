export type AccountModel = {
   accessToken: string
   user: {
      id: number
      name: string
      firstLogin: boolean
      phone: string | null
      changePassword: boolean
      role: number
      registrationStatus: string
      days_to_recive: string
      entrepay: {
         keySeller: string | null
      }
   }
}