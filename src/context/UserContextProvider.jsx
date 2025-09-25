import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
import axios from "axios";
import { USER_API } from "../constant";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(USER_API).then((res) => {
      setUser(res.data);
    });
  }, []);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
