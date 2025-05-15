import React, { createContext, useContext } from "react";
import { AdminConfig } from "../types/adminConfig";
import { DBHelper } from "supabase-handler";

interface AdminContextProps {
  db: DBHelper;
  config: AdminConfig;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{
  children: React.ReactNode;
  db: DBHelper;
  config: AdminConfig;
}> = ({ children, db, config }) => {
  return (
    <AdminContext.Provider value={{ db, config }}>
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
