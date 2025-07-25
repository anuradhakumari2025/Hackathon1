import MainRouting from "./routes/MainRouting";
import "./App.css";
import { useState } from "react";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <MainRouting />
      )}
    </>
  );
};

export default App;
