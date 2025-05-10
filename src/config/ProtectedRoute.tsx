import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentSessionDTO } from "./AuthProvider";

// Protected Route Component
export const ProtectedRoute = ({
  children,
  getCurrentSession,
}: {
  children: React.ReactNode;
  getCurrentSession: getCurrentSessionDTO;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await getCurrentSession();
      if (data && data.session) setSession(data.session);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};
