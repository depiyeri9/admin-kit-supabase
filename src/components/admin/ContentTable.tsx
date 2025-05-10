
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Column {
  key: string;
  header: string;
  width?: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface ContentTableProps<T> {
  columns: Column[];
  data: T[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  isLoading?: boolean;
}

function ContentTable<T extends { id: string }>({ 
  columns, 
  data, 
  onEdit, 
  onDelete, 
  isLoading = false 
}: ContentTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-emerald/50">
      <Table>
        <TableHeader>
          <TableRow className="bg-emerald-light hover:bg-emerald-light">
            {columns.map((column) => (
              <TableHead 
                key={column.key} 
                className="text-gold font-serif"
                style={column.width ? { width: column.width } : {}}
              >
                {column.header}
              </TableHead>
            ))}
            <TableHead className="text-gold font-serif text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="text-center py-10">
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="text-center py-10 text-black">
                No items found
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.id} className="border-b border-emerald/30 hover:bg-emerald-light/20 text-black/60">
                {columns.map((column) => (
                  <TableCell key={`${item.id}-${column.key}`}>
                    {column.render ? column.render((item as any)[column.key], item) : (item as any)[column.key]}
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-gold"
                      onClick={() => onEdit(item)}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-burgundy"
                      onClick={() => onDelete(item)}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContentTable;
