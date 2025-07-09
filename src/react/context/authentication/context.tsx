import type { AccountModel } from "@/domain/models"
import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import type { AuthenticationContextArgsType } from "./types"
import { ForbiddenError, UnexpectedError } from "@/domain/errors"


export const AuthContext = createContext({} as AuthenticationContextArgsType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [auth, setAuth] = useState<AccountModel | null>(null)
   const [isLoading, setIsLoading] = useState(true)

   const setInformationAccountControl = useCallback((account: AccountModel) => {
      setAuth(account)
      localStorage.setItem("auth", JSON.stringify(account))
   }, [])

   const logout = useCallback(() => {
      setAuth(null)
      localStorage.removeItem("auth")
   }, [])

   const isAuthenticated = useCallback(() => {
      return !!auth
   }, [auth])

   const getAccount = useCallback(() => {
      return auth
   }, [auth])

   const getToken = useCallback(() => {
      return auth?.accessToken ?? null
   }, [auth])

   useEffect(() => {
      const initializeAuth = async () => {
         try {
            const storedAuth = localStorage.getItem("auth")
            if (storedAuth) {
               const parsedAuth: AccountModel = JSON.parse(storedAuth)

               setAuth(parsedAuth)
            }
         } catch (error) {
            if (error instanceof ForbiddenError || error instanceof UnexpectedError) {
               localStorage.removeItem("auth")
            }
         } finally {
            setIsLoading(false)
         }
      }

      initializeAuth()
   }, [])

   const values = useMemo(() => ({
      setInformationAccountControl,
      logout,
      isAuthenticated,
      getAccount,
      getToken,
      isLoading
   }), [setInformationAccountControl, logout, isAuthenticated, getAccount, getToken, isLoading])

   return (
      <AuthContext.Provider value={values}>
         {children}
      </AuthContext.Provider>
   )
}