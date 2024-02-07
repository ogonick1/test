import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import BodyInfo from "./Components/BodyInfo";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <BodyInfo />
      <Footer />
    </>
  );
}

export default App;
