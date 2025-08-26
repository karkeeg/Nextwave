import { ParallaxProvider } from "react-scroll-parallax";
import MyRoutes from "./Pages/MyRoutes";
import { useEffect } from "react";

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
  // useEffect(() => {
  //   function handleClick(e) {
  //     const btn = e.target.closest("button, [role='button']");
  //     if (btn) {
  //       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     }
  //   }
  //   document.addEventListener("click", handleClick, { passive: true });
  //   return () => document.removeEventListener("click", handleClick);
  // }, []);
  return (
    <>
      <ParallaxProvider>
        <MyRoutes />
      </ParallaxProvider>
    </>
  );
}

export default App;
