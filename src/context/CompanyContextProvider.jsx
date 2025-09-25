import React, { createContext, useState } from "react";
export const CompanyContext = createContext();

const CompanyContextProvider = ({ children }) => {
  const [company, setCompany] = useState(null);
  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContextProvider;
