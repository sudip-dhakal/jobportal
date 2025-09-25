import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import JobContextProvider from "./context/JobContextProvider.jsx";
import CompanyContextProvider from "./context/CompanyContextProvider.jsx";
import ApplicationContextProvider from "./context/ApplicationContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <JobContextProvider>
      <ApplicationContextProvider>
        <CompanyContextProvider>
          <App />
        </CompanyContextProvider>
      </ApplicationContextProvider>
    </JobContextProvider>
  </UserContextProvider>
);
