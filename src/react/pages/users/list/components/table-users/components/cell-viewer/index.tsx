import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/react/hooks/use-mobile"
import { Button } from "@/react/components/ui/button"
import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/react/components/ui/chart"
import {
   Drawer,
   DrawerContent,
   DrawerDescription,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/react/components/ui/drawer"
import { Input } from "@/react/components/ui/input"
import { Label } from "@/react/components/ui/label"
import { Separator } from "@/react/components/ui/separator"
import { chartConfig, chartData } from "./data"
import type { UsersModelTableArgsType } from "../../../../types"
import { dateDifference } from "../../helpers/date-controlled"
import { formatPhoneNumber } from "@/react/utils/formater"
import { getNameStatus } from "@/react/utils/status"



export function TableCellViewer({ item }: { item: UsersModelTableArgsType }) {
   const isMobile = useIsMobile()

   return (
      <Drawer direction={isMobile ? "bottom" : "right"}>
         <DrawerTrigger asChild>
            <Button variant="link" className="text-foreground w-fit px-0 text-left">
               {item.name}
            </Button>
         </DrawerTrigger>
         <DrawerContent>
            <DrawerHeader className="gap-1">
               <DrawerTitle>{item.name}</DrawerTitle>
               <DrawerDescription>
                  Informações sobre o vendedor <strong>{item.name}</strong> e suas métricas
               </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
               {!isMobile && (
                  <>
                     <ChartContainer config={chartConfig}>
                        <AreaChart
                           accessibilityLayer
                           data={chartData}
                           margin={{
                              left: 0,
                              right: 10,
                           }}
                        >
                           <CartesianGrid vertical={false} />
                           <XAxis
                              dataKey="month"
                              tickLine={false}
                              axisLine={false}
                              tickMargin={8}
                              tickFormatter={(value) => value.slice(0, 3)}
                              hide
                           />
                           <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent indicator="dot" />}
                           />
                           <Area
                              dataKey="mobile"
                              type="natural"
                              fill="var(--color-mobile)"
                              fillOpacity={0.6}
                              stroke="var(--color-mobile)"
                              stackId="a"
                           />
                           <Area
                              dataKey="desktop"
                              type="natural"
                              fill="var(--color-desktop)"
                              fillOpacity={0.4}
                              stroke="var(--color-desktop)"
                              stackId="a"
                           />
                        </AreaChart>
                     </ChartContainer>
                     <Separator />
                     {/* <div className="grid gap-2">
                        <div className="flex gap-2 leading-none font-medium">
                           Trending up by 5.2% this month{" "}
                           <IconTrendingUp className="size-4" />
                        </div>
                        <div className="text-muted-foreground">
                           Showing total visitors for the last 6 months. This is just
                           some random text to test the layout. It spans multiple lines
                           and should wrap around.
                        </div>
                     </div> */}
                     <Separator />
                  </>
               )}
               <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex flex-col gap-3">
                        <Label htmlFor="header">Cliente</Label>
                        <Input id="header" defaultValue={item.name} disabled />
                     </div>
                     <div className="flex flex-col gap-3">
                        <Label htmlFor="header">Nome fantasia</Label>
                        <Input id="header" defaultValue={item.tranding_name} disabled />
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="flex flex-col gap-3">
                        <Label htmlFor="header">Telefone</Label>
                        <Input id="header" defaultValue={formatPhoneNumber(item?.phone)} disabled />
                     </div>
                     <div className="flex flex-col gap-3">
                        <Label htmlFor="header">Ultimo link </Label>
                        <Input id="header" defaultValue={dateDifference(item?.last_link)} disabled />
                     </div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <Label htmlFor="reviewer">Status</Label>
                     <Input id="header" defaultValue={getNameStatus(item?.status)} disabled />
                  </div>
               </form>
            </div>
         </DrawerContent>
      </Drawer>
   )
}
