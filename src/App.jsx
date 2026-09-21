import { useState } from "react";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Pricing from "./pages/Pricing";
// import { featureData } from "./data/features";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter} from "react-router";
import { Routes, Route } from "react-router";
import { featureData } from "./data/features";

const App = () => {
  const [features] = useState(featureData);

  return (
    <>
     <BrowserRouter>
        <Headers />

        <Routes>
          <Route path="/" element={<Home features={features} />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;