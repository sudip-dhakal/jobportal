import React, { createContext, useState } from "react";
export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null);
  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
