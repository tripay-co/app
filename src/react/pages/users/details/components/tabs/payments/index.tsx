import { Card, CardContent, CardHeader, CardTitle } from "@/react/components/ui/card"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/react/components/ui/select"
import { useState } from "react"
import PinBankGateway from "./components/getaways/pinbank"
import { TabsContent } from "@radix-ui/react-tabs"


export default function PaymentsTab() {
   const [selected, setSelected] = useState("")

   return (
      <TabsContent value="payments">
         <Card>
            <CardHeader>
               <CardTitle className="text-xl">Contas</CardTitle>
            </CardHeader>
            <CardContent>
               <Select onValueChange={(e) => setSelected(e)}>
                  <SelectTrigger className="w-full mb-6">
                     <SelectValue placeholder="Selecione uma conta" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="PinBank">Pin Bank</SelectItem>
                  </SelectContent>
               </Select>

               {selected.includes("PinBank") && <PinBankGateway />}
            </CardContent>
         </Card>
      </TabsContent>
   )
}
