import { FileIcon } from "lucide-react"
import type { FileArgsType } from "./types"

/** 
* @param {Object} props
* @param {string} props.name
* @param {string} props.filePath
* @param {boolean} props.isDeleteable
*/
export default function FileComponent({ name, filePath, isDeleteable }: FileArgsType) {

   // const { isLoadingUrl, url } = useFileComponent({ filePath })

   // const { deleteFile } = useDeleteFile({ name })

   // if (isLoadingUrl) return <div>Carregando...</div>

   return (
      <div className='flex justify-between items-center gap-2 px-2 py-2 border rounded'>
         <a
            href={"www.google.com"}
            target="_blank"
            className="w-full gap-2 rounded"
         >
            <span className='flex items-center justify-between'>
               <div className="flex items-center gap-3">
                  <FileIcon />
                  {name}
               </div>
            </span>
         </a>
         {/* {isDeleteable && (
            <DeleteModal fileName={name} onDelete={deleteFile} />
         )} */}
      </div>
   )
}