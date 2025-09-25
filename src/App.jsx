import "./App.css";
import Landing from "./Components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Home from "./User/Home";
import Profile from "./User/Profile";
import Rec_Home from "./Recruiter/Rec_Home";
import Companies from "./Recruiter/Companies";
import Applications from "./Recruiter/Applications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recruiter_home" element={<Rec_Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/applications" element={<Applications />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
