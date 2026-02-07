import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cursor from "./components/Cursor";
import { useEffect } from "react";
import { initLenis } from "./utils/lenis";
import PageTransition from "./components/PageTransition";

function App() {
   useEffect(() => {
    initLenis();
  }, []);
  return (
    <>
      <PageTransition />
      <Navbar />
      <Home />
      <Cursor />
    <div className="fixed top-0 left-0 h-[2px] bg-violet-500 z-[9999]"
  style={{
    width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
  }}
/>
    </>
  );
}

export default App;
