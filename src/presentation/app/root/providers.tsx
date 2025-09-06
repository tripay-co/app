import { client } from "@/presentation/lib/query-client.ts"
import { AuthProvider } from "@/presentation/context/authentication/context.tsx"
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