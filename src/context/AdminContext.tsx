import React, { createContext, useContext } from "react";
import { AdminConfig } from "../types/adminConfig";

interface AdminContextProps {
  logout: () => Promise<{ error?: unknown }>;
  config: AdminConfig;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{
  children: React.ReactNode;
  logout: () => Promise<{ error?: unknown }>;
  config: AdminConfig;
}> = ({ children, logout, config }) => {
  return (
    <AdminContext.Provider value={{ logout, config }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};
