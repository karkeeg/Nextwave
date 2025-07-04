import React from "react";
import LayoutPage from "./LayoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Testimonials from "../Components/Testimonials";
import AboutPage from "./AboutPage";
import FAQs from "../Components/FAQs";
import Blog from "../Components/Blog";
import Services from "../Components/Services";
import IndustryServed from "../Components/IndustryServed";
import Contact from "../Components/Contact";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industry-served" element={<IndustryServed />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
