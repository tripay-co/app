// d'import { BASE_URL } from "@/axios/config";
// import useAuthLera from "@/context/auth/components/lera/hooks/useAuthLera";
// import { useBusiness } from "@/hooks/use-bussines";
// import useAuth from "@/hooks/useAuth";
// import axios from "axios";
// import { useState } from "react";
// import { useQuery, useQueryClient } from "react-query";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function useDeleteFile({ name }) {

//    const { auth } = useAuth();
//    const { auth: authLera } = useAuthLera();
//    const { id } = useParams();
//    const { isPayturismo } = useBusiness();

//    const queryClient = useQueryClient();

//    const toastId = 'delete-file'

//    const endpoint = isPayturismo ? "users" : "lera-pay";

//    const invalidateQueries = isPayturismo ? 'user-detail' : 'account-details'

//    async function deleteFile() {
//       try {
//          toast.loading('Excluindo arquivo...', {
//             toastId: toastId,
//             updateId: toastId,
//          })

//          const { data } = await axios.post(`${BASE_URL}/${endpoint}/documents/delete`, { id, name }, {
//             headers: {
//                Authorization: `Bearer ${isPayturismo ? auth.accessToken : authLera.access_token}`
//             }
//          });

//          queryClient.invalidateQueries(invalidateQueries, id);

//          toast.update(toastId, {
//             render: 'Arquivo excluído com sucesso.',
//             type: 'success',
//             isLoading: false,
//             autoClose: 3000,
//          })
//       } catch (error) {
//          toast.update(toastId, {
//             render: 'Erro ao excluir o arquivo.',
//             type: 'error',
//             isLoading: false,
//             autoClose: 3000,
//          })
//       }
//    }

//    return {
//       deleteFile,
//    }
// }