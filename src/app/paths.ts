export const PATHS = {
  LOGIN: "/",
  METRICS: "/metricas",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/esqueci-minha-senha",
  USERS_LIST: "/usuarios",
  USERS_DETAILS: (id: string) => `/usuario/${id}`,
}
