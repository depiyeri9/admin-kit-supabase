import { Session } from "@supabase/supabase-js";
import { useState } from "react";

export type getCurrentSessionDTO = () => Promise<
  | {
      data:
        | {
            session: Session;
          }
        | {
            session: null;
          };
      error: null;
    }
  | {
      data: null;
      error: unknown;
    }
>;

// Auth Provider Component
export const AuthProvider = ({
  getCurrentSession,
  children,
}: {
  getCurrentSession: getCurrentSessionDTO;
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentSession().then(({ data, error }) => {
      if (data && data.session) setSession(data.session);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return children;
};
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
