import { client } from "@/lib/query-client"
import { AuthProvider } from "@/react/context/authentication/context"
import { QueryClientProvider } from "@tanstack/react-query"


type ProvidersProps = {
   children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
   return (
      <QueryClientProvider client={client}>
         <AuthProvider>
            <main>
               {children}
            </main>
         </AuthProvider>
      </QueryClientProvider >
   )
}