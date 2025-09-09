export const statusData = [
   {
      status: "PRE_REGISTRATION",
      title: "Pré Registro",
      description:
         "O usuário está pré-registrado e aguardando que o analista realize o cadastro junto aos parceiros de pagamento.",
   },
   {
      status: "PENDING",
      title: "Aguardando Face ID",
      description: "O usuário está aguardando a verificação do Face ID.",
   },
   {
      status: "VERIFIED",
      title: "Autorizar pré cadastro",
      description:
         "Os documentos enviados pelo usuário estão sob análise, aguardando a revisão pelo analista responsável.",
   },
   {
      status: "APPROVED",
      title: "Aprovado",
      description: "O usuário foi aprovado e está apto para continuar.",
   },
   {
      status: "REJECTED_BY_ANALYST",
      title: "Rejeitado pelo analista",
      description: "O cadastro do usuário foi rejeitado por inconsistências nos dados.",
   },
   {
      status: "REJECTED_SERASA",
      title: "Rejeitado pelo SERASA",
      description: "O cadastro foi rejeitado por informações do SERASA.",
   },
   {
      status: "REJECTED_FACE_ID",
      title: "Face ID Rejeitado",
      description: "A verificação de Face ID do usuário foi rejeitada.",
   },
   {
      status: "MANUAL_APPROVE",
      title: "Aguardando Aprovação Manual",
      description: "O cadastro está aguardando aprovação manual por um analista.",
   },
   {
      status: "PRE REGISTRATION",
      title: "Aguardando parceiro",
      description: "O cadastro está aguardando aprovação do parceiro.",
   },
   {
      status: "IMPORT_REGISTER",
      title: "Usuário importado",
      description: "Este usuário foi importado por um analista, e ainda não realizou o Login.",
   },
]