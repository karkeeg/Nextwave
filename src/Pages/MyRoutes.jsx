import React from "react";
import LayoutPage from "./LayoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import FAQs from "../Components/FAQs";
import Blog from "../Components/Blog";
import IndustryServed from "../Components/IndustryServed";
import BlogArticle from "../Components/BlogArticle";
import ServiceDetail from "../Components/ServiceDetail";
import IndustryDetail from "../Components/IndustryDetail";
// import Practice from "../Components/Practice";
import ScrollToTop from "../Components/ScrollToTop";
import PrivacyPolicy from './../Components/PrivacyPolicy';
import TestimonialDetail from "../Components/TestimonialsDetails";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/industry-served" element={<IndustryServed />} />
          <Route path="/blog/:id" element={<BlogArticle />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          <Route path="/testimonial/:id" element={<TestimonialDetail />} />
         
          {/* <Route path="/practice" element={<Practice />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
