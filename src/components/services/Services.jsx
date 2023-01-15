import React from "react";
import ServicesCardWebDesign from "./ServicesCard";
import ServicesCardResponsibe from "./ServicesCardResponsibe";
import ServicesCardDevelopment from "./ServicesCardDevelopment";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Can Do</h5>
        <h1>Services</h1>
        <div className="container services__container">
          <ServicesCardWebDesign Title={"Web Design"} />
          <ServicesCardResponsibe Title={"Responsibe Design"} />
          <ServicesCardDevelopment Title={"Development"} />
        </div>
      </section>
    </>
  );
};

export default Services;
