import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import industries from "../data/industyData";

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const industry = industries[industryId];

  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} | NextWave AI`;
    } else {
      document.title = "Industry Not Found | NextWave AI";
    }

    return () => {
      document.title = "NextWave AI";
    };
  }, [industry]);

  const handleBackToIndustries = () => {
    navigate("/", { state: { scrollTo: "industries" } });
  };

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Industry Not Found
          </h1>
          <button
            onClick={handleBackToIndustries}
            className="text-[#2176C1] hover:text-[#185a96]"
          >
            Back to Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {industry
            ? `${industry.title} | NextWave AI`
            : "Industry Not Found | NextWave AI"}
        </title>
        <meta
          name="description"
          content={industry?.desc || "Industry details not found"}
        />
        <meta
          property="og:title"
          content={`${industry?.title || "Industry"} | NextWave AI`}
        />
        <meta
          property="og:description"
          content={industry?.desc || "Industry details not found"}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://nextwaveai-8.vercel.app/industries/${industryId}`}
        />
        <meta
          name="keywords"
          content={`${industry.title},${industry.features},${industry.benefits} ,AI, Technology, NextWave AI`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 p-20 lg:p-20">
        {/* Back Button */}
        <button
          onClick={handleBackToIndustries}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#2176C1] hover:text-[#185a96] mb-6 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 font-semibold"
        >
          <FaArrowLeft size={16} />
          Back to Industries
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-7xl mx-auto mb-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2176C1] to-[#185a96] text-white p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {industry.icon &&
                  React.createElement(industry.icon, { size: 16 })}
              </div>
              <div>
                <h2 className="text-white font-bold">{industry.title}</h2>
                <p className="text-white/80">{industry.subtitle}</p>
              </div>
            </div>
            <p className="text-white/90">{industry.desc}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Key Solutions
                  </h2>
                  <div className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Benefits
                  </h2>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Let's discuss how our AI solutions can transform your{" "}
                    {industry.title} operations.
                  </p>
                  <button
                    onClick={() =>
                      navigate("/", { state: { scrollTo: "contact" } })
                    }
                    className="w-full bg-[#2176C1] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#185a96] transition-colors duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetail;
