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
declare function ContentTable<T extends {
    id: string;
}>({ columns, data, onEdit, onDelete, isLoading }: ContentTableProps<T>): import("react/jsx-runtime").JSX.Element;
export default ContentTable;
