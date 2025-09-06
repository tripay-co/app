import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { Root } from "./root"
import { RouteErrorBoundary } from "./error-boundary"
import { LoginPage, ResetPassword, ForgotPassword } from "@/presentation/pages"
import { PATHS } from "./paths.ts"
import { AuthenticationLayout } from "@/presentation/layouts/authentication"
import { DashboardLayout } from "@/presentation/layouts/dashboard"
import { Metrics } from "@/presentation/pages/metrics"
import { RequireAuth } from "./auth"
import { ROLES } from "./roles"
import { MultiStepFormDemo } from "@/presentation/pages/auth/create"


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
          { path: PATHS.REGISTER, element: <MultiStepFormDemo /> },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
