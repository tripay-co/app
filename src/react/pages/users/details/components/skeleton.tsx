import { Card, CardContent, CardHeader } from "@/react/components/ui/card"
import { Separator } from "@/react/components/ui/separator"
import { Skeleton } from "@/react/components/ui/skeleton"


export default function UserDetailsSkeleton() {
   return (
      <div className="flex min-h-screen bg-gray-50">
         <div className="flex-1 flex flex-col min-w-0">
            <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 lg:py-6">
               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                     <Skeleton className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex-shrink-0" />
                     <div className="space-y-2 min-w-0 flex-1">
                        <Skeleton className="h-6 lg:h-8 w-48 lg:w-64" />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                           <Skeleton className="h-6 w-20 rounded-full" />
                           <Skeleton className="h-8 w-32 rounded-md" />
                        </div>
                     </div>
                  </div>
                  <Skeleton className="h-8 w-16 rounded-md" />
               </div>

               <div className="mt-4 lg:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  <div className="flex items-center gap-3">
                     <div className="w-4 h-4 bg-gray-200 rounded flex-shrink-0" />
                     <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-4 h-4 bg-gray-200 rounded flex-shrink-0" />
                     <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-4 h-4 bg-gray-200 rounded flex-shrink-0" />
                     <Skeleton className="h-4 w-8" />
                  </div>
                  <div className="flex items-center gap-3">
                     <Skeleton className="h-4 w-12 flex-shrink-0" />
                     <Skeleton className="h-4 w-20" />
                  </div>
               </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 lg:p-6">
               <div className="space-y-4 lg:space-y-6">
                  {/* Tabs Skeleton */}
                  <div className="overflow-x-auto">
                     <div className="flex gap-1 p-1 bg-gray-100 rounded-lg min-w-max lg:min-w-0">
                        {Array.from({ length: 6 }).map((_, i) => (
                           <Skeleton key={i} className={`h-9 rounded-md ${i === 0 ? "w-32 bg-white" : "w-24 lg:w-32"}`} />
                        ))}
                     </div>
                  </div>

                  {/* Main Content Card */}
                  <Card>
                     <CardHeader className="pb-4">
                        <Skeleton className="h-6 lg:h-7 w-40" />
                     </CardHeader>
                     <CardContent className="space-y-4 lg:space-y-6">
                        {/* Basic Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                           {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="space-y-2">
                                 <Skeleton className="h-4 w-16" />
                                 <Skeleton className="h-4 w-32" />
                              </div>
                           ))}
                        </div>

                        <div className="space-y-2">
                           <Skeleton className="h-4 w-24" />
                           <Skeleton className="h-4 w-20" />
                        </div>

                        <Separator />

                        {/* Company Info Section */}
                        <div>
                           <Skeleton className="h-5 lg:h-6 w-48 mb-4" />
                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                              <div className="space-y-4">
                                 {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="space-y-2">
                                       <Skeleton className="h-4 w-24" />
                                       <Skeleton className="h-4 w-36" />
                                    </div>
                                 ))}
                              </div>
                              <div className="space-y-4">
                                 {Array.from({ length: 2 }).map((_, i) => (
                                    <div key={i} className="space-y-2">
                                       <Skeleton className="h-4 w-20" />
                                       <Skeleton className="h-4 w-28" />
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <Separator />

                        {/* Address Section */}
                        <div>
                           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                              <Skeleton className="h-5 lg:h-6 w-20" />
                              <Skeleton className="h-8 w-16 rounded-md" />
                           </div>
                           <div className="space-y-2">
                              <Skeleton className="h-4 w-full max-w-md" />
                              <Skeleton className="h-4 w-3/4" />
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   )
}
