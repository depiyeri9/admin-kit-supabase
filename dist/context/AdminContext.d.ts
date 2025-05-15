import { default as React } from 'react';
import { AdminConfig } from '../types/adminConfig';
import { DBHelper } from 'supabase-handler';
interface AdminContextProps {
    db: DBHelper;
    config: AdminConfig;
}
export declare const AdminProvider: React.FC<{
    children: React.ReactNode;
    db: DBHelper;
    config: AdminConfig;
}>;
export declare const useAdminContext: () => AdminContextProps;
export {};
