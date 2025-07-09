import { ChartAreaInteractive } from "@/react/pages/metrics/components/chart-area-interactive"
import { DataTable } from "@/react/pages/metrics/components/data-table"
import { SectionCards } from "@/react/pages/metrics/components/section-cards"
import data from "./data.json"


export function Metrics() {
   return (
      <div className="flex flex-1 flex-col">
         <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
               <SectionCards />
               <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
               </div>
               <DataTable data={data} />
            </div>
         </div>
      </div>
   )
}