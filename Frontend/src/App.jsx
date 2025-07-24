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
      }, 2000); 
    }
  }, []);
  return (
    <>
      <MainRouting />
    </>
  );
};

export default App;
