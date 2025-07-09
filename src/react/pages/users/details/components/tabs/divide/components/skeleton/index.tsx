import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/react/components/ui/table"
import { Skeleton } from "@/react/components/ui/skeleton"
import { AlertTriangle, TrendingDown, Calendar, DollarSign, Building2, MapPin } from "lucide-react"


export default function CreditAnalysisSkeleton() {
   return (
      <Card className="min-h-screen bg-white p-6 shadow-none">
         <div className="max-w-7xl mx-auto space-y-6">
            <div className="space-y-2">
               <Skeleton className="h-9 w-64" />
               <Skeleton className="h-5 w-96" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               <Card className="shadow-none">
                  <CardContent className="p-6">
                     <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-gray-300 animate-pulse" />
                        <div className="space-y-2">
                           <Skeleton className="h-4 w-28" />
                           <Skeleton className="h-8 w-16" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
               <Card className="shadow-none">
                  <CardContent className="p-6">
                     <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-gray-300 animate-pulse" />
                        <div className="space-y-2">
                           <Skeleton className="h-4 w-24" />
                           <Skeleton className="h-8 w-20" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
               <Card className="shadow-none">
                  <CardContent className="p-6">
                     <div className="flex items-center space-x-2">
                        <TrendingDown className="h-5 w-5 text-gray-300 animate-pulse" />
                        <div className="space-y-2">
                           <Skeleton className="h-4 w-20" />
                           <Skeleton className="h-8 w-12" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
               <Card className="shadow-none">
                  <CardContent className="p-6">
                     <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-gray-300 animate-pulse" />
                        <div className="space-y-2">
                           <Skeleton className="h-4 w-32" />
                           <Skeleton className="h-5 w-24" />
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
            <Card className="shadow-none">
               <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                     <TrendingDown className="h-5 w-5 text-gray-300 animate-pulse" />
                     <Skeleton className="h-6 w-48" />
                  </CardTitle>
                  <CardDescription>
                     <Skeleton className="h-4 w-64" />
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                     <div className="text-center space-y-2">
                        <Skeleton className="h-4 w-12 mx-auto" />
                        <Skeleton className="h-12 w-16 mx-auto" />
                     </div>
                     <div className="text-center space-y-2">
                        <Skeleton className="h-4 w-12 mx-auto" />
                        <Skeleton className="h-8 w-8 mx-auto rounded-full" />
                     </div>
                     <div className="text-center space-y-2">
                        <Skeleton className="h-4 w-16 mx-auto" />
                        <Skeleton className="h-6 w-20 mx-auto" />
                     </div>
                     <div className="text-center space-y-2">
                        <Skeleton className="h-4 w-20 mx-auto" />
                        <Skeleton className="h-6 w-16 mx-auto" />
                     </div>
                     <div className="text-center space-y-2">
                        <Skeleton className="h-4 w-20 mx-auto" />
                        <Skeleton className="h-6 w-20 mx-auto rounded-full" />
                     </div>
                  </div>
               </CardContent>
            </Card>
            <Card className="shadow-none">
               <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                     <AlertTriangle className="h-5 w-5 text-gray-300 animate-pulse" />
                     <Skeleton className="h-6 w-48" />
                  </CardTitle>
                  <CardDescription>
                     <Skeleton className="h-4 w-80" />
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                           <TableRow>
                              <TableHead>
                                 <Skeleton className="h-4 w-24" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-20" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-20" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-24" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-16" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-24" />
                              </TableHead>
                              <TableHead>
                                 <Skeleton className="h-4 w-16" />
                              </TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {Array.from({ length: 6 }).map((_, index) => (
                              <TableRow key={index}>
                                 <TableCell>
                                    <Skeleton className="h-4 w-20" />
                                 </TableCell>
                                 <TableCell>
                                    <div className="flex items-center space-x-2">
                                       <Building2 className="h-4 w-4 text-gray-300 animate-pulse" />
                                       <div className="space-y-1">
                                          <Skeleton className="h-4 w-48" />
                                          <Skeleton className="h-3 w-32" />
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell>
                                    <Skeleton className="h-4 w-24" />
                                 </TableCell>
                                 <TableCell>
                                    <Skeleton className="h-4 w-20" />
                                 </TableCell>
                                 <TableCell>
                                    <Skeleton className="h-4 w-20" />
                                 </TableCell>
                                 <TableCell>
                                    <div className="flex items-center space-x-1">
                                       <MapPin className="h-4 w-4 text-gray-300 animate-pulse" />
                                       <Skeleton className="h-4 w-24" />
                                    </div>
                                 </TableCell>
                                 <TableCell>
                                    <Skeleton className="h-6 w-20 rounded-full" />
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>
               </CardContent>
            </Card>
         </div>
      </Card>
   )
}
