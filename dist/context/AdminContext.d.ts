import { default as React } from 'react';
import { AdminConfig } from '../types/adminConfig';
interface AdminContextProps {
    logout: () => Promise<{
        error?: unknown;
    }>;
    config: AdminConfig;
}
export declare const AdminProvider: React.FC<{
    children: React.ReactNode;
    logout: () => Promise<{
        error?: unknown;
    }>;
    config: AdminConfig;
}>;
export declare const useAdminContext: () => AdminContextProps;
export {};
