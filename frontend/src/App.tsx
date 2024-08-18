import FristPage from "./Components/FristPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FristPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;