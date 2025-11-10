import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaBrain,
  FaComments,
  FaLanguage,
  FaRobot,
  FaArrowLeft,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import services from "../data/serviceData";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    // Convert the array to an object with id as key for easier lookup
    const servicesObject = services.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});

    // Get the service based on serviceId from the services object
    const foundService = servicesObject[serviceId];
    setService(foundService);

    // Update document title directly for immediate updates
    if (foundService) {
      document.title = `NextWave AI - Service | ${foundService.title}`;
    } else {
      document.title = "Service Not Found | NextWave AI";
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "NextWave AI";
    };
  }, [serviceId]);

  const handleBackToServices = () => {
    navigate("/", { state: { scrollTo: "services" } });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <button
            onClick={handleBackToServices}
            className="text-[#2176C1] hover:text-[#185a96]"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>NextWave AI - Service | {service.title}</title>
        <meta name="description" content={service.desc} />
        <meta property="og:title" content={`${service.title} | NextWave AI`} />
        <meta property="og:description" content={service.desc} />
        <link
          rel="canonical"
          href={`https://nextwaveai-8.vercel.app/services/${serviceId}`}
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-6 pt-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#2176C1] hover:text-[#185a96] mb-6 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 font-semibold"
          >
            <FaArrowLeft size={16} />
            Back to Services
          </button>

          {/* Main Service Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#2176C1] to-[#185a96] text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  {React.createElement(service.icon, { size: 24 })}
                </div>
                <div>
                  <h2 className="text-white font-bold">{service.title}</h2>
                  <p className="text-lg text-white/80">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-white/90 max-w-3xl">{service.desc}</p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      About This Service
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {service.longDesc}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-5 h-5 bg-[#2176C1] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Business Benefits
                    </h2>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#2176C1] rounded-full mt-2"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Image */}
                  <div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                    />
                  </div>

                  {/* CTA */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Let's discuss how our {service.title} can transform your
                      business.
                    </p>
                    <button
                      onClick={() =>
                        navigate("/", { state: { scrollTo: "contact" } })
                      }
                      className="w-full bg-[#2176C1] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#185a96] transition-colors duration-300 text-sm"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Other Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services
                .filter((serviceItem) => serviceItem.id !== serviceId)
                .map((relatedService) => (
                  <button
                    key={relatedService.id}
                    onClick={() => {
                      navigate(`/services/${relatedService.id}`);
                      window.scrollTo(0, 0);
                    }}
                    className="text-left p-4 rounded-lg border border-gray-200 hover:border-[#2176C1] hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#2176C1] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(relatedService.icon, { size: 16 })}
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#2176C1] transition-colors duration-300">
                        {relatedService.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {relatedService.subtitle}
                    </p>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
