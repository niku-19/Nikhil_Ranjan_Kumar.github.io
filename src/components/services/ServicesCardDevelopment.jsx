import React from "react";
import { BiCheck } from "react-icons/bi";

const ServicesCard = (props) => {
  return (
    <>
      <article className="services">
        <div className="services__header">
          <h3>{props.Title}</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="services__list-icons" />
            <p>Site purpose.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Target audiences.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Site objectives.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Responsive, mobile-friendly design.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Fresh content.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Engaging content.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Site maintenance.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Features.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Accessibility.</p>
          </li>
        </ul>
      </article>
    </>
  );
};

export default ServicesCard;
