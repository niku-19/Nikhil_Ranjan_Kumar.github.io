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
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </article>
    </>
  );
};

export default ServicesCard;
