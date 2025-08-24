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
import PrivacyPolicy from "./PrivacyPolicy";
import Practice from "../Components/Practice";

const MyRoutes = () => {
  return (
    <BrowserRouter>
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/practice" element={<Practice />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
