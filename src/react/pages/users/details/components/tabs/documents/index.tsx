import { Button, Card, CardContent, CardHeader, CardTitle, TabsContent } from "@/react/components/ui"
import type { DocumentTabArgsType } from "./types"
import FileComponent from "@/react/components/file"
import { PlusIcon } from "lucide-react"


export function DocumentsTab({ documents }: DocumentTabArgsType) {
   
   function openUserUploadModal() {
      console.log("cliquei")
   }
   
   return ( 
      <TabsContent value="documents">
         <Card>
            <CardHeader className="flex items-center justify-between">
               <CardTitle className="text-lg lg:text-xl">Documentos</CardTitle>
               <Button
                  onClick={openUserUploadModal}
                  className="cursor-pointer"
               >
                  <PlusIcon className="text-white size-4" />
               </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3 sm:grid-cols-3">
               {documents?.map((document) => (
                  <FileComponent
                     key={document.name}
                     name={document.name}
                     filePath={document.path}
                     isDeleteable={true}
                  />
               ))}
            </CardContent>
         </Card>
      </TabsContent>

   )
}