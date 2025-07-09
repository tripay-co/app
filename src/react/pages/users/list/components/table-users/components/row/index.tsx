import { useSortable } from "@dnd-kit/sortable"
import { flexRender, type Row } from "@tanstack/react-table"
import { TableCell, TableRow } from "@/react/components/ui/table"
import { CSS } from "@dnd-kit/utilities"
import type { UsersModelTableArgsType } from "../../../../types"



export function DraggableRow({ row }: { row: Row<UsersModelTableArgsType> }) {
   const { transform, transition, setNodeRef, isDragging } = useSortable({
      id: row.original.id,
   })
   return (
      <TableRow
         data-state={row.getIsSelected() && "selected"}
         data-dragging={isDragging}
         ref={setNodeRef}
         className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80 hover:bg-gray-50"
         style={{
            transform: CSS.Transform.toString(transform),
            transition: transition,
         }}
      >
         {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
               {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
         ))}
      </TableRow>
   )
}