import { Session } from '@supabase/supabase-js';
type getCurrentSessionDTO = () => Promise<{
    data: {
        session: Session;
    } | {
        session: null;
    };
    error: null;
} | {
    data: null;
    error: unknown;
}>;
export declare const ProtectedRoute: ({ children, getCurrentSession, }: {
    children: React.ReactNode;
    getCurrentSession: getCurrentSessionDTO;
}) => import("react/jsx-runtime").JSX.Element;
export {};
