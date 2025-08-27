import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "../Components/CustomCursor";

const LayoutPage = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
