import { PATHS } from "@/app/paths"
import {
   HelpCircle,
   Settings,
   Users,
   LayoutDashboard,
   Link2,
   ChartLine,
   DollarSign,
   SmartphoneNfc
} from "lucide-react"


export const APPBAR_CONTROL = {
   user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
   },
   navMain: [
      {
         title: "Dashboard",
         url: PATHS.METRICS,
         icon: LayoutDashboard,
         isActive: false,
      },
      {
         title: "Links de pagamento",
         url: "#",
         icon: Link2,
         items: [
            {
               title: "Meus links",
               url: "#",
            },
            {
               title: "Criar link de pagamento",
               url: "#",
            },
            {
               title: "Simular uma venda",
               url: "#",
            },
         ],
      },
   ],
   navManager: [
      {
         title: "Usuários",
         url: PATHS.USERS_LIST,
         icon: Users,
      },
      {
         title: "Painel de análise",
         url: "#",
         icon: ChartLine,
      },
      {
         title: "Financeiro",
         url: "#",
         icon: DollarSign,
         items: [
            {
               title: "Relatório de vendas",
               url: "#",
            },
            {
               title: "Liberar pagamentos",
               url: "#",
            },
         ],
      },
   ],
   navSecondary: [
      {
         title: "Configurações",
         url: "#",
         icon: Settings,
      },
      {
         title: "Ajuda",
         url: "#",
         icon: HelpCircle,
      },
      {
         title: "Entrar em contato",
         url: "#",
         icon: SmartphoneNfc,
      },
   ],
}
