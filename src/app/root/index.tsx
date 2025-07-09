import { Outlet } from "react-router-dom"
import { Providers } from "./providers"
import { Toaster } from "sonner"


export function Root() {
  return (
    <Providers>
      <Outlet />
      <Toaster position="top-center" />
    </Providers>
  )
}
