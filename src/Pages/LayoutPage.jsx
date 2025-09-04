import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "../Components/CustomCursor";
import { Helmet } from 'react-helmet-async';

const LayoutPage = () => {
  const isStaging = import.meta.env.VITE_STAGING === 'true';
  return (
    <>
            <Helmet>
        {isStaging && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
