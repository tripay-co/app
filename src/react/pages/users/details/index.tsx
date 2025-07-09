import { Badge } from "@/react/components/ui/badge"
import { Button } from "@/react/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/react/components/ui/tabs"
import {
  User,
  Mail,
  Phone,
  FileText,
  CreditCard,
  Scale,
  MessageSquare,
  Edit,
  HandCoins,
} from "lucide-react"
import useFetchOneUser from "./hooks/use-fetch-one-user"
import { BasicInfoTab } from "./components/tabs/basic-info"
import UserDetailsSkeleton from "./components/skeleton"
import { formatPhoneNumber } from "@/react/utils/formater"
import { cx } from "class-variance-authority"
import { getBadgeColor } from "@/react/utils/badge"
import { getNameStatus } from '@/react/utils/status'
import { BankingTab } from "./components/tabs/banking"
import { DocumentsTab } from "./components/tabs/documents"
import PaymentsTab from "./components/tabs/payments"
import { LegalTab } from "./components/tabs/legal"
import { DivideTab } from "./components/tabs/divide"


export const UsersDetails = () => {
  const { user, isLoading } = useFetchOneUser()

  if (isLoading) {
    return <UserDetailsSkeleton />
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 break-words">{user?.name}</h1>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Badge variant="secondary" className={cx(getBadgeColor(user?.status), "text-xs text-white w-52")}>
                    {getNameStatus(user?.status)}
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white cursor-pointer ">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Enviar mensagem
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="self-start bg-transparent">
              <Edit className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Editar</span>
            </Button>
          </div>
          <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-600 min-w-0">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{user?.infoBasic?.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{formatPhoneNumber(user?.cellphone)}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <HandCoins className="w-4 h-4 flex-shrink-0" />
              <span>{user?.days_to_recevie}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 lg:p-6">
          <Tabs defaultValue="basic" className="space-y-4 lg:space-y-6">
            <div className="overflow-x-auto">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 min-w-max lg:min-w-0 bg-gray-100 rounded-md">
                <TabsTrigger
                  value="basic"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <User className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Informações básicas</span>
                  <span className="sm:hidden">Básicas</span>
                </TabsTrigger>
                <TabsTrigger
                  value="banking"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <CreditCard className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Informações bancárias</span>
                  <span className="sm:hidden">Bancárias</span>
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <FileText className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Documentos</span>
                  <span className="sm:hidden">Docs</span>
                </TabsTrigger>
                <TabsTrigger
                  value="payments"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <CreditCard className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Pagamentos liberados</span>
                  <span className="sm:hidden">Pagamentos</span>
                </TabsTrigger>
                <TabsTrigger
                  value="legal"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <Scale className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Processos Judiciais</span>
                  <span className="sm:hidden">Processos</span>
                </TabsTrigger>
                <TabsTrigger
                  value="serasa"
                  className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm px-2 lg:px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md"
                >
                  <FileText className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Detalhes Serasa</span>
                  <span className="sm:hidden">Serasa</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <BasicInfoTab user={user?.infoBasic} />

            <BankingTab infoBank={user?.infoBank} />

            <DocumentsTab documents={user?.documents} />

            <PaymentsTab />

            <LegalTab />

            <DivideTab />
          </Tabs>
        </div>
      </div>
    </div>
  )
}