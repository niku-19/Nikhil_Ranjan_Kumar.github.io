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
            <p>More mobile traffic.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Faster mobile development at lower costs.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lower maintenance needs.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Faster pages.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Lower bounce rates.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Higher conversion rates.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Easier analytics reporting.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Improved SEO.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Improved online browsing experience.</p>
          </li>
        </ul>
      </article>
    </>
  );
};

export default ServicesCard;
