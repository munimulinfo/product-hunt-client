import React from "react";
import NavBar from "../Shared/navbar";
import Footer from "../Shared/footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
