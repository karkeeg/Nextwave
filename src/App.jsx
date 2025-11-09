import { ParallaxProvider } from "react-scroll-parallax";
import { HelmetProvider } from "react-helmet-async";
import MyRoutes from "./Pages/MyRoutes";
import { useEffect } from "react";
import CustomCursor from "./Components/CustomCursor";

function App() {
  // Force top on initial load/reload
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch {}
    }
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Try multiple timings to defeat browser restoration
    toTop();
    const raf = requestAnimationFrame(toTop);
    window.addEventListener("load", toTop, { once: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", toTop);
    };
  }, []);

  return (
    <HelmetProvider>
      <ParallaxProvider>
        <CustomCursor />
        <MyRoutes />
      </ParallaxProvider>
    </HelmetProvider>
  );
}

export default App;
