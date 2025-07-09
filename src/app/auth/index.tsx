import { Navigate, Outlet, useLocation } from "react-router-dom"
import type { AllowedRolesProps } from "./types"
import { useAuth } from "@/react/context/authentication"
import { LoadingProcessRequest } from "@/react/components/loading"


export const RequireAuth = ({ allowedRoles }: AllowedRolesProps) => {
  const { getAccount, isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <LoadingProcessRequest />
    )
  }

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  const account = getAccount()

  if (account?.user.registrationStatus === "IMPORT_REGISTER") {
    return <Navigate to="/import-login" state={{ from: location }} replace />
  }

  if (account?.user.firstLogin === true) {
    return <Navigate to="/first-login" state={{ from: location }} replace />
  }

  if (allowedRoles && !allowedRoles.includes(account?.user.role ?? -1)) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Outlet />
}