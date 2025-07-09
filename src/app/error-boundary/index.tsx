import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import '../../index.css'


export function RouteErrorBoundary() {
  const error = useRouteError()
  const [copied, setCopied] = React.useState(false)

  const copyAdvancedInfo = () => {
    const errorInfo = isRouteErrorResponse(error)
      ? `Status: ${error.status}\nMessage: ${error.statusText || error.data}`
      : `Error: ${error instanceof Error ? error.message : 'Unknown error'}`

    navigator.clipboard.writeText(errorInfo)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className='flex w-full max-w-2xl flex-col items-center'>
        <p className='text-xl md:text-2xl font-medium text-center mb-4'>Encontramos um problema</p>
        <div className='w-full p-4 md:p-6 flex flex-col gap-3 md:gap-4'>
          <p className='text-sm md:text-base'>Ocorreu um comportamento inesperado na aplicação.</p>
          <p className='text-sm md:text-base'>
            Se o problema persistir, <span className='font-bold'>copie as informações avançadas</span> e reporte o problema pelo email{' '}
            <a href="mailto:suporte@payturismo.com.br" className='text-black'>
              suporte@payturismo.com.br
            </a>.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md'>
          <button
            onClick={copyAdvancedInfo}
            className={`text-xs md:text-sm rounded-full px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out flex-1 sm:flex-none sm:w-auto ${copied
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-[#EEF2F4] hover:bg-[#E5E7EB] text-[#5D5E63]'
              }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="hidden sm:inline">COPIADO COM SUCESSO!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">COPIAR INFORMAÇÕES AVANÇADAS</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   private copyTimeoutId: NodeJS.Timeout | null = null;

//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false, copied: false };
//   }

//   static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
//     return { hasError: true, error };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.error('ErrorBoundary caught an error:', error, errorInfo);

//     /* TODO (Aqui fica os monitoramentos dos erros):
//       [ ] - Colocar monitoramento para o sentry ou posthog
//       [ ] - Colocar monitoramento para o google analytics
//     */
//   }

//   componentWillUnmount() {
//     if (this.copyTimeoutId) {
//       clearTimeout(this.copyTimeoutId);
//     }
//   }

//   copyAdvancedInfo = async () => {
//     const errorInfo = this.state.error
//       ? `Error: ${this.state.error.message}\nStack: ${this.state.error.stack || 'Stack trace not available'}`
//       : 'Unknown error occurred';

//     try {
//       if (navigator.clipboard && window.isSecureContext) {
//         await navigator.clipboard.writeText(errorInfo);
//       } else {
//         const textArea = document.createElement('textarea');
//         textArea.value = errorInfo;
//         textArea.style.position = 'fixed';
//         textArea.style.left = '-999999px';
//         textArea.style.top = '-999999px';
//         document.body.appendChild(textArea);
//         textArea.focus();
//         textArea.select();
//         document.execCommand('copy');
//         textArea.remove();
//       }

//       this.setState({ copied: true });

//       if (this.copyTimeoutId) {
//         clearTimeout(this.copyTimeoutId);
//       }

//       this.copyTimeoutId = setTimeout(() => {
//         this.setState({ copied: false });
//         this.copyTimeoutId = null;
//       }, 2000);
//     } catch (err) {
//       console.error('Failed to copy error info:', err);
//       // Aqui você pode mostrar uma mensagem de erro para o usuário
//     }
//   };

//   handleReload = () => {
//     window.location.reload();
//   };

//   render() {
//     if (this.state.hasError) {
//       if (this.props.fallback) {
//         return this.props.fallback;
//       }

//       return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
//           <div className="flex w-full max-w-2xl flex-col items-center">
//             <p className="text-xl md:text-2xl font-medium text-center mb-4">
//               Encontramos um problema
//             </p>
//             <div className="w-full p-4 md:p-6 flex flex-col gap-3 md:gap-4">
//               <p className="text-sm md:text-base">
//                 Ocorreu um comportamento inesperado na aplicação.
//               </p>
//               <p className="text-sm md:text-base">
//                 Se o problema persistir,{' '}
//                 <span className="font-bold">copie as informações avançadas</span> e
//                 reporte o problema pelo email{' '}
//                 <a
//                   href="mailto:suporte@payturismo.com.br"
//                   className="underline"
//                 >
//                   suporte@payturismo.com.br
//                 </a>
//                 .
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md">
//               <button
//                 onClick={this.handleReload}
//                 className="text-xs md:text-sm bg-[#ED008C] hover:bg-[#a42b72] text-white rounded-full px-4 py-3 transition-all duration-300 ease-in-out flex-1 sm:flex-none sm:w-auto"
//                 type="button"
//               >
//                 RECARREGAR PÁGINA
//               </button>
//               <button
//                 onClick={this.copyAdvancedInfo}
//                 className={`text-xs md:text-sm rounded-full px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out flex-1 sm:flex-none sm:w-auto ${this.state.copied
//                     ? 'bg-green-100 text-green-700 border border-green-300'
//                     : 'bg-[#EEF2F4] hover:bg-[#E5E7EB] text-[#5D5E63]'
//                   }`}
//                 type="button"
//               >
//                 {this.state.copied ? (
//                   <>
//                     <svg
//                       className="w-4 h-4 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                     <span className="hidden sm:inline">COPIADO COM SUCESSO!</span>
//                     <span className="sm:hidden">COPIADO!</span>
//                   </>
//                 ) : (
//                   <>
//                     <svg
//                       className="w-4 h-4 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                       />
//                     </svg>
//                     <span className="hidden sm:inline">COPIAR INFORMAÇÕES AVANÇADAS</span>
//                     <span className="sm:hidden">COPIAR INFO</span>
//                   </>
//                 )}
//               </button>
//             </div>

//             {process.env.NODE_ENV === 'development' && this.state.error && (
//               <details className="mt-6 md:mt-8 text-left bg-gray-100 rounded-lg p-4 w-full">
//                 <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
//                   Detalhes do erro (desenvolvimento)
//                 </summary>
//                 <pre className="text-xs text-gray-600 overflow-auto bg-white p-3 rounded border max-h-64 scrollbar-thin">
//                   {this.state.error.toString()}
//                   {this.state.error.stack && (
//                     <>
//                       {'\n\nStack trace:\n'}
//                       {this.state.error.stack}
//                     </>
//                   )}
//                 </pre>
//               </details>
//             )}
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }