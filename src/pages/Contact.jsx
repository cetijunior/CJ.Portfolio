import React from "react";
import styled from "styled-components";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import resume from "../assets/resume.png";
import { motion } from "framer-motion";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 14rem;
  color: #c3c3c3;
  margin-bottom: 2rem;
  margin-right: 4rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;

  @media (max-width: 650px) {
    width: 100%;
    margin: 1rem;
    align-items: center;
    margin-left: -2rem;
    padding: 1rem;
    position: relative;
  }
`;

const Social = styled.img`
  background-color: black;
  border-radius: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: -8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006633;
  }

  @media (max-width: 650px) {
    align-items: start;
  }
`;

const SocialSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: -8px;
  transition: background-color 0.3s;

  svg {
    fill: #c3c3c3;
    transition: fill 0.3s;
  }

  &:hover {
    background-color: #006633;
    svg {
      fill: #fff;
    }
  }
`;

const ResumeButton = styled.button`
  background-color: #006633;
  color: black;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-left: -8px;
  font-family: "Inconsolata", monospace;

  &:hover {
    background-color: #004d40;
    color: #fff;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    align-items: start;
  }
`;

const EmailLink = styled.a`
  color: #006633;
  text-decoration: none;
  font-size: 14px;
  padding-left: 0;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Contact = () => {
  const variants = {
    hidden: { x: 100, opacity: 0, transition: { duration: 0.2 } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
      }}
    >
      <Info>
        <p style={{ marginBottom: "0.25rem" }}>What's next?</p>
        <h1 style={{ marginBottom: "0.5rem" }}>
          Get In
          <a
            href="mailto:bsncetijunior@gmail.com"
            style={{ color: "#006633", paddingLeft: "14px" }}
          >
            Touch
          </a>
        </h1>
        <EmailLink href="mailto:bsncetijunior@gmail.com">
          bsncetijunior@gmail.com
        </EmailLink>
        <Center>
          <a href="https://github.com/cetijunior" target="_blank" rel="noopener noreferrer">
            <Social src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/shefqet-cj-lame/" target="_blank" rel="noopener noreferrer">
            <Social src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/cplusplusj" target="_blank" rel="noopener noreferrer">
            <SocialSvg>
              <InstagramIcon />
            </SocialSvg>
          </a>
          <ResumeButton
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Mgiqq5mZZTfvpkINffIH3dU66WOjPaUd/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </ResumeButton>
        </Center>
      </Info>
    </motion.div>
  );
};

export default Contact;
