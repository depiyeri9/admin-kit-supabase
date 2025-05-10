type LoginPageProps = {
    loginWithEmailPassword: (email: string, password: string) => Promise<{
        data: {
            user: import('@supabase/supabase-js').AuthUser;
            session: import('@supabase/supabase-js').AuthSession;
            weakPassword?: import('@supabase/supabase-js').WeakPassword;
        };
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
};
declare const LoginPage: ({ loginWithEmailPassword }: LoginPageProps) => import("react/jsx-runtime").JSX.Element;
export default LoginPage;
