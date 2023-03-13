import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Home from "../Pages/home/Home";
import WorkWithMe from "../Pages/workWithMe/WorkWithMe";
import Services from "../Pages/services/Services";
import Contacto from "../Pages/contacto/Contacto";
import Cv from "../Pages/cv/Cv";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDos">
        <ul className="ulFooter">
          <Link to="/" element={<Home />} className=" linkMenuFooter">
            <li className="nav__item">Home</li>
          </Link>

          <Link
            to="/Pages/WorkWithMe"
            element={<WorkWithMe />}
            className=" linkMenuFooter"
          >
            <li className="nav__item">Work with me</li>
          </Link>

          <Link
            to="/Pages/Services"
            element={<Services />}
            className=" linkMenuFooter"
          >
            <li className="nav__item ">Services</li>
          </Link>

          <Link
            to="/Pages/Contacto"
            element={<Contacto />}
            className=" linkMenuFooter"
          >
            <li className="nav__item">Contact </li>
          </Link>

          <Link to="/Pages/Cv" element={<Cv />} className=" linkMenuFooter">
            <li className="nav__item ">Resume</li>
          </Link>
        </ul>
        <div className="divGitLinkFooter fDos">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matiasmalonso/"
            className="linkLinkedFooter"
          >
            <div className="divLinkedFooter" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/matias5804"
            className="linkLinkedFooter"
          >
            <div className="divGitHubFooter"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
