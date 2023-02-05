import React from "react";
//lazy loading..
const Header = React.lazy(() => import("./components/header/Header"));
const Nav = React.lazy(() => import("./components/navBar/Nav"));
const About = React.lazy(() => import("./components/about/About"));
const Experience = React.lazy(() => import("./components/experience/Experience"));
const Services = React.lazy(() => import("./components/services/Services"));
const Portfolio = React.lazy(() => import("./components/personal portfolio/PortFolio"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
//simple
// import Nav from "./components/navBar/Nav";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
// import Portfolio from "./components/personal portfolio/PortFolio";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
};

export default App;
