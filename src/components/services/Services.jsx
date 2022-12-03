import React from "react";
import ServicesCard from "./ServicesCard";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Can Do</h5>
        <h1>Services</h1>
        <div className="container services__container">
          <ServicesCard Title={"Web Design"} />
          <ServicesCard Title={"Responsibe Design"} />
          <ServicesCard Title={"Development"} />
        </div>
      </section>
    </>
  );
};

export default Services;
