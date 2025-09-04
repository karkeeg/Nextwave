import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./LayoutPage";
import ScrollToTop from "../Components/ScrollToTop";

// Lazy-loaded pages
const HomePage = lazy(() => import("./HomePage"));
const BlogArticle = lazy(() => import("../Components/BlogArticle"));
const ServiceDetail = lazy(() => import("../Components/ServiceDetail"));
const IndustryDetail = lazy(() => import("../Components/IndustryDetail"));
const TestimonialDetail = lazy(() =>
  import("../Components/TestimonialsDetails")
);
const PrivacyPolicy = lazy(() => import("../Components/PrivacyPolicy"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));
// const Practice = lazy(() => import("../Components/Practice"));

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />

            <Route path="/blog/:id" element={<BlogArticle />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route
              path="/industries/:industryId"
              element={<IndustryDetail />}
            />
            <Route path="/testimonial/:id" element={<TestimonialDetail />} />

            {/* <Route path="/practice" element={<Practice />} /> */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MyRoutes;
