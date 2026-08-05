import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return <AppRoutes />;
};

export default App;