import React, { createContext, useState } from "react";
export const ApplicationContext = createContext();

const ApplicationContextProvider = ({ children }) => {
  const [application, setApplication] = useState(null);
  return (
    <ApplicationContext.Provider value={{ application, setApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
