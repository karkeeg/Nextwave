import React from "react";
import LayoutPage from "./LayoutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import FAQs from "../Components/FAQs";
import Blog from "../Components/Blog";
import IndustryServed from "../Components/IndustryServed";
import BlogArticle from "../Components/BlogArticle";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
