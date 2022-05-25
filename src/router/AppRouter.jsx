import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default AppRouter;
