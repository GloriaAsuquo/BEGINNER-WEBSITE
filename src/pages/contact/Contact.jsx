import React from "react";
import "./Contact.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsArrowRightShort } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="menue">
      <ul className="menue_category">
        <li>
          Development <BsArrowRightShort />
        </li>
        <li>
          Design (UL/UX) <BsArrowRightShort />
        </li>
        <li>
          Backend <BsArrowRightShort />
        </li>
        <li>
          Software Development <BsArrowRightShort />
        </li>
      </ul>
    </div>
  );
}
