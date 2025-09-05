import React, { useState } from "react";
import {
  SiOpenai,
  SiTensorflow,
  SiReact,
  SiNextdotjs,
  SiAmazon,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDjango,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiGooglecloud,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiGithubactions,
  SiAwsamplify,
  SiHuggingface,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiAnaconda,
  SiApacheairflow,
  SiMlflow,
} from "react-icons/si";

const IconMarquee = () => {
  const [tip, setTip] = React.useState({ show: false, x: 0, y: 0, label: "" });
  const showTip = (label, e) =>
    setTip({ show: true, x: e.clientX, y: e.clientY + 18, label });
  const moveTip = (e) =>
    setTip((t) => ({ ...t, x: e.clientX, y: e.clientY + 18 }));
  const hideTip = () => setTip((t) => ({ ...t, show: false }));

  // Responsive icon size
  const icons = [
    {
      key: "openai",
      label: "OpenAI",
      node: <SiOpenai className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "tf",
      label: "TensorFlow",
      node: (
        <SiTensorflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "pt",
      label: "PyTorch",
      node: <SiPytorch className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "keras",
      label: "Keras",
      node: <SiKeras className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "sk",
      label: "scikit-learn",
      node: (
        <SiScikitlearn className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "cv",
      label: "OpenCV",
      node: <SiOpencv className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "hf",
      label: "Hugging Face",
      node: (
        <SiHuggingface className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "numpy",
      label: "NumPy",
      node: <SiNumpy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "pandas",
      label: "Pandas",
      node: <SiPandas className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "jupyter",
      label: "Jupyter",
      node: <SiJupyter className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "anaconda",
      label: "Anaconda",
      node: <SiAnaconda className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "airflow",
      label: "Apache Airflow",
      node: (
        <SiApacheairflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "mlflow",
      label: "MLflow",
      node: <SiMlflow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "py",
      label: "Python",
      node: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "aws",
      label: "AWS",
      node: <SiAmazon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "gcp",
      label: "Google Cloud",
      node: (
        <SiGooglecloud className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "react",
      label: "React",
      node: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "next",
      label: "Next.js",
      node: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "node",
      label: "Node.js",
      node: <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "django",
      label: "Django",
      node: <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "ts",
      label: "TypeScript",
      node: (
        <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "js",
      label: "JavaScript",
      node: (
        <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "tw",
      label: "Tailwind CSS",
      node: (
        <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "mongo",
      label: "MongoDB",
      node: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "pg",
      label: "PostgreSQL",
      node: (
        <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "docker",
      label: "Docker",
      node: <SiDocker className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    },
    {
      key: "k8s",
      label: "Kubernetes",
      node: (
        <SiKubernetes className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "gha",
      label: "GitHub Actions",
      node: (
        <SiGithubactions className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
    {
      key: "awsa",
      label: "AWS Amplify",
      node: (
        <SiAwsamplify className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      ),
    },
  ];

  const strip = [...icons, ...icons, ...icons];

  return (
    <div className="w-full">
      <div className="mx-0">
        <div className="overflow-hidden py-2 sm:py-3 md:py-4 bg-transparent">
          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-28 animate-marquee"
            style={{ width: "max-content" }}
            role="marquee"
            aria-label="Technology stack icons"
            aria-live="polite"
          >
            {strip.map((item, i) => {
              // Clone the icon node to add accessibility props
              const iconWithProps = React.cloneElement(item.node, {
                role: "img",
                "aria-hidden": "false",
                focusable: "false",
                "aria-label": item.label,
                title: item.label,
              });

              return (
                <div
                  key={`${item.key}-${i}`}
                  className="text-slate-700 flex-shrink-0 transition-transform duration-200 hover:scale-110 cursor-pointer"
                  onMouseEnter={(e) => showTip(item.label, e)}
                  onMouseMove={moveTip}
                  onMouseLeave={hideTip}
                  role="presentation"
                >
                  {iconWithProps}
                </div>
              );
            })}
          </div>
        </div>
        {tip.show && (
          <div
            style={{
              position: "fixed",
              left: tip.x,
              top: tip.y,
              zIndex: 10000,
            }}
            className="pointer-events-none px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap shadow-lg"
          >
            {tip.label}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 80s linear infinite;
          }
        }
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 100s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default IconMarquee;
