// import axios from "axios"


// export default function useFileComponent({ filePath }) {

//    const { auth } = useAuth()
//    const { auth: authLera } = useAuthLera()
//    const { isPayturismo } = useBusiness()

//    const { data: url, isLoading: isLoadingUrl } = useQuery({
//       queryKey: ["file-url", filePath, isPayturismo],
//       cacheTime: 60 * 10, // 10 minutos
//       queryFn: getSignedUrl,
//       retry: 1,
//       enabled: !!filePath
//    })

//    const endpoint = isPayturismo ? "uploads" : "uploads/lera"

//    async function getSignedUrl() {
//       const { data } = await axios.get(`${BASE_URL}/${endpoint}?filePath=${filePath}`, {
//          headers: {
//             Authorization: `Bearer ${isPayturismo ? auth.accessToken : authLera.auth_token}`
//          }
//       })

//       return data.fileUrl
//    }

//    return {
//       url,
//       isLoadingUrl
//    }
// }