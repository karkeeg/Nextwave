import React from "react";
import LayoutPage from "./LayoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BlogArticle from "../Components/BlogArticle";
import ServiceDetail from "../Components/ServiceDetail";
import IndustryDetail from "../Components/IndustryDetail";
// import Practice from "../Components/Practice";
import ScrollToTop from "../Components/ScrollToTop";
import PrivacyPolicy from './../Components/PrivacyPolicy';
import TestimonialDetail from "../Components/TestimonialsDetails";
import NotFoundPage from './NotFoundPage';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          

          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          <Route path="/testimonial/:id" element={<TestimonialDetail />} />
         
          {/* <Route path="/practice" element={<Practice />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/404" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
