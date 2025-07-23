import MainRouting from "./routes/MainRouting";
import "./App.css";
import { useEffect } from "react";
const App = () => {
  
  useEffect(() => {
    const splash = document.getElementById("splash");
    if (splash) {
      splash.style.opacity = 0;
      setTimeout(() => {
        splash.style.display = "none";
      }, 1000); // wait for fade-out if needed
    }
  }, []);
  return (
    <>
      <MainRouting />
    </>
  );
};

export default App;
