import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  // Set document title directly for immediate updates
  useEffect(() => {
    document.title = 'Privacy Policy | NextWave AI';
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'NextWave AI';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28 pb-8">
      <Helmet>
        <title>Privacy Policy | NextWave AI</title>
        <meta name="description" content="Read NextWave AI's Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta name="keywords" content="Privacy Policy, Data Protection, Personal Information, NextWave AI, AI Technology" />
        <meta property="og:title" content="Privacy Policy | NextWave AI" />
        <meta property="og:description" content="Read NextWave AI's Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nextwaveai-8.vercel.app/privacy-policy" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#2176C1] hover:text-[#185a96] mb-8 transition-colors duration-300"
        >
          <FaArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2176C1] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              We're committed to safeguarding your personal information and ensuring full transparency.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="mb-4">
                This Privacy Policy is from Next Wave AI Pvt. Ltd., accessible from https://nextwaveai.com. 
                This page informs you of our policies regarding the collection, use, and disclosure of personal 
                data when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                We use your data to provide and improve the Service. By using the Service, you agree to the 
                collection and use of information in accordance with this policy. Unless otherwise defined in 
                this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms 
                and Conditions, accessible from https://nextwaveai.com.
              </p>
            </section>

            {/* Log Files */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Files</h2>
              <p className="mb-4">
                Next Wave AI Pvt. Ltd. follows a standard procedure of using log files. These files log visitors 
                when they visit websites. All hosting companies do this and a part of hosting services' analytics. 
                The information collected by log files include internet protocol (IP) addresses, browser type, 
                Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the 
                number of clicks.
              </p>
              <p>
                These are not linked to any information that is personally identifiable. The purpose of the 
                information is for analyzing trends, administering the site, tracking users' movement on the 
                website, and gathering demographic information.
              </p>
            </section>

            {/* Cookies and Web Beacons */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Web Beacons</h2>
              <p>
                Like any other website, Next Wave AI Pvt. Ltd. uses 'cookies'. These cookies are used to store 
                information including visitors' preferences, and the pages on the website that the visitor 
                accessed or visited. The information is used to optimize the users' experience by customizing 
                our web page content based on visitors' browser type and/or other information.
              </p>
            </section>

            {/* Privacy Policies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policies</h2>
              <p className="mb-4">
                You may consult this list to find the Privacy Policy for each of the advertising partners of 
                Next Wave AI Pvt. Ltd. Third-party ad servers or ad networks uses technologies like cookies, 
                JavaScript, or Web Beacons that are used in their respective advertisements and links that 
                appear on Next Wave AI Pvt. Ltd., which are sent directly to users' browser.
              </p>
              <p className="mb-4">
                They automatically receive your IP address when this occurs. These technologies are used to 
                measure the effectiveness of their advertising campaigns and/or to personalize the advertising 
                content that you see on websites that you visit.
              </p>
              <p>
                Note that Next Wave AI Pvt. Ltd. has no access to or control over these cookies that are used 
                by third-party advertisers.
              </p>
            </section>

            {/* Third Party Privacy Policies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third Party Privacy Policies</h2>
              <p className="mb-4">
                Next Wave AI Pvt. Ltd.'s Privacy Policy does not apply to other advertisers or websites. Thus, 
                we are advising you to consult the respective Privacy Policies of these third-party ad servers 
                for more detailed information. It may include their practices and instructions about how to 
                opt-out of certain options.
              </p>
              <p className="mb-4">
                You can choose to disable cookies through your individual browser options. To know more detailed 
                information about cookie management with specific web browsers, it can be found at the browsers' 
                respective websites. What Are Cookies?
              </p>
            </section>

            {/* Children's Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Information</h2>
              <p className="mb-4">
                Another part of our priority is adding protection for children while using the internet. We 
                encourage parents and guardians to observe, participate in, and/or monitor and guide their 
                online activity.
              </p>
              <p>
                Next Wave AI Pvt. Ltd. does not knowingly collect any Personal Identifiable Information from 
                children under the age of 13. If you think that your child provided this kind of information 
                on our website, we strongly encourage you to contact us immediately and we will do our best 
                efforts to promptly remove such information from our records.
              </p>
            </section>

            {/* Online Privacy Policy Only */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Privacy Policy Only</h2>
              <p>
                This Privacy Policy applies only to our online activities and is valid for visitors to our 
                website with regards to the information that they shared and/or collect in Next Wave AI Pvt. Ltd. 
                This policy is not applicable to any information collected offline or via channels other than 
                this website.
              </p>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> nextwaveai@gmail.com</p>
              <p><strong>Phone:</strong> +977 9876543210</p>
              <p><strong>Address:</strong> 123 Street, Kathmandu Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;