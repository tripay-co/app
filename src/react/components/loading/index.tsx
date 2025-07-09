import { DotLoader } from "react-spinners"


export const LoadingProcessRequest = () => {
   const colorLoading = "#1A82A3"
   
   return (
      <div className="flex items-center justify-center min-h-screen">
         <DotLoader color={colorLoading} />
      </div>
   )
}