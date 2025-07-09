import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { Root } from "./root"
import { RouteErrorBoundary } from "./error-boundary"
import { LoginPage, ResetPassword, ForgotPassword } from "@/react/pages"
import { PATHS } from "./paths"
import { AuthenticationLayout } from "@/react/layouts/authentication"
import { DashboardLayout } from "@/react/layouts/dashboard"
import { Metrics } from "@/react/pages/metrics"
import { RequireAuth } from "./auth"
import { ROLES } from "./roles"


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        element: <RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]} />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { path: PATHS.METRICS, element: <Metrics /> },
            ],
          },
        ],
      },
      {
        element: <AuthenticationLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
          { path: PATHS.RESET_PASSWORD, element: <ResetPassword /> },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
