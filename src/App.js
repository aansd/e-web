import React from "react";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./Pages/Home/Home";
import PageOne from "./Pages/PageOne/PageOne";
import PageTwo from "./Pages/PageTwo/PageTwo";
import PageThree from "./Pages/PageThree/PageThree";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div>
        <AppNavbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <PageOne />
      </div>
      <div>
        <PageTwo />
      </div>
      <div>
        <PageThree />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
