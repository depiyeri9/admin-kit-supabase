import { AdminConfig } from './types/adminConfig';
export * from './types/adminConfig';
export type AdminAppProps = {
    config: AdminConfig;
    children: React.ReactNode;
};
export declare const AdminKit: ({ config, children }: AdminAppProps) => import("react/jsx-runtime").JSX.Element;
