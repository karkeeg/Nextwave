import { ParallaxProvider } from "react-scroll-parallax";
import MyRoutes from "./Pages/MyRoutes";

function App() {
  return (
    <>
      <ParallaxProvider>
        <MyRoutes />
      </ParallaxProvider>
    </>
  );
}

export default App;
