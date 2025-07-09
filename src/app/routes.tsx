import { createBrowserRouter, type RouteObject } from "react-router-dom"
import { Root } from "./root"
import { RouteErrorBoundary } from "./error-boundary"
import { LoginPage, ResetPassword, ForgotPassword, UsersDetails, ListUsers } from "@/react/pages"
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
        children: [
          {
            errorElement: <RouteErrorBoundary />,
            children: [
              {
                children: [
                  {
                    element: (<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]} />),
                    children: [
                      {
                        element: <DashboardLayout />,
                        children: [
                          { path: PATHS.METRICS, element: <Metrics /> },
                          // {
                          //   path: paths.paymentLink,
                          //   element: <PaymentLinks />,
                          // },
                          // {
                          //   path: paths.payturismo.salesSimulation,
                          //   element: <SalesSimulation />,
                          // },
                          // {
                          //   path: paths.transactionsDetails(":id"),
                          //   element: <TransactionDetailsHOME />,
                          // },
                          // {
                          //   path: paths.createPaymentLink,
                          //   element: <CreatePaymentLink />,
                          // },
                          // {
                          //   path: paths.financialReport,
                          //   element: <FinancialReport />,
                          // },
                          // {
                          //   path: paths.payments,
                          //   element: <PaymentLinksTable />,
                          // },
                          // {
                          //   path: paths.paymentsDetails(":id"),
                          //   element: <EstablishmentPaymentDetails />,
                          // },
                          // {
                          //   path: paths.payturismo.conciliation,
                          //   element: <ConciliationAccounts />,
                          // },
                          // { path: paths.profile, element: <Profile /> },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                children: [
                  {
                    element: <RequireAuth allowedRoles={[ROLES.ADMIN]} />,
                    children: [
                      {
                        element: <DashboardLayout />,
                        children: [
                          {
                            path: PATHS.USERS_LIST,
                            element: <ListUsers />,
                          },
                          {
                            path: PATHS.USERS_DETAILS(":id"),
                            element: <UsersDetails />,
                          },
                          // {
                          //   path: paths.transactions,
                          //   element: <Transactions />,
                          // },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                children: [
                  {
                    element: <AuthenticationLayout />,
                    children: [
                      { index: true, element: <LoginPage />, },
                      { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword />, },
                      { path: PATHS.RESET_PASSWORD, element: <ResetPassword /> },
                    ],
                  },
                ],
              },
              // { path: paths.payturismo.register, element: <NewRegister /> },
              // {
              //   path: paths.checkouPayment(":public_id"),
              //   element: <CheckoutPayment />,
              // },
              // { path: paths.selfieHelp, element: <SelfieHelp /> },
              // {
              //   path: paths.payturismo.confirmRegister,
              //   element: <ConfirmRegister />,
              // },
              // {
              //   path: paths.payturismo.docValidation,
              //   element: <DocumentValidation />,
              // },
              // { path: paths.finallyPayment, element: <FinalizarPagamento /> },
              // { path: paths.payturismo.firstLogin, element: <FirstLogin /> },
              // { path: paths.payturismo.importLogin, element: <ImportLogin /> },
              // { path: paths.notFoundPage, element: <Custom404 /> },
            ],
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
