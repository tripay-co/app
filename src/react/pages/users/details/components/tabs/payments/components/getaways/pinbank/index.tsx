import { LoadingProcessRequest } from "@/react/components/loading"
import { useFetchAllInformation } from "./hooks/use-fetch-all-information"


export default function PinBankGateway() {
   const { info, isLoading } = useFetchAllInformation()

   return (
      <div>
         {isLoading && (
            <LoadingProcessRequest />
         )}
         {!isLoading && info && (
            <div>
               <div>
                  <span className="font-bold">Status da conta:</span>{" "}
                  {info.Data.StatusContaDigital}
                  <h3 className="my-2 text-xl font-bold text-primary">Lista de documentos</h3>
                  <ul className="flex flex-col gap-4">
                     {info.Data.ListaDocumentosCadastrados.map((doc) => (
                        <li className="flex flex-col border-b">
                           <div>
                              <span className="font-bold">Nome do arquivo:</span>{" "}
                              {doc.NomeArquivo}
                           </div>
                           <div>
                              <span className="font-bold">Descrição:</span>{" "}
                              {doc.DescricaoDocumento ?? "---"}
                           </div>
                           <div>
                              <span className="font-bold">Status:</span>{" "}
                              {doc.StatusDocumento === 'PENDENTE' ? 'Aguardando retorno PinBank' : doc.StatusDocumento}
                           </div>
                           <div>
                              <span className="font-bold">Motivo Devolucao:</span>{" "}
                              {doc.MotivoDevolucao ?? "---"}
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
      </div>
   )
}
