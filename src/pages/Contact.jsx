import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Wrap = styled.div`
  padding: 2.5rem 3rem;
  color: #c3c3c3;
  font-family: "Inconsolata", monospace;
  max-width: 560px;

  @media (max-width: 650px) {
    padding: 1.5rem;
  }
`;

const Prompt = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 200;
  color: #e0e0e0;
  margin: 0 0 0.3rem;

  span {
    color: #006633;
    font-weight: 700;
  }
`;

const Sub = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin: 0.5rem 0 2rem;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(195, 195, 195, 0.08);
  margin-bottom: 2rem;
`;

const EmailBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #006633;
  color: #fff;
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 18px;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: background 0.2s;
  width: fit-content;

  &:hover {
    background: #004422;
  }
`;

const SectionLabel = styled.p`
  font-size: 11px;
  color: #555;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
`;

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 2.5rem;
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: #141414;
  border-radius: 8px;
  text-decoration: none;
  color: #c3c3c3;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(0, 102, 51, 0.4);
    background: #1a2a1a;
    color: #fff;
  }
`;

const SocialIconImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

const SocialIconSvg = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg { fill: #888; }
`;

const SocialLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  flex: 1;
`;

const SocialHandle = styled.span`
  font-size: 12px;
  color: #555;
`;

const ResumeBtn = styled.button`
  background: transparent;
  border: 1px solid #333;
  color: #888;
  font-family: "Inconsolata", monospace;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  width: fit-content;

  &:hover {
    border-color: #006633;
    color: #006633;
  }
`;

const IgSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Contact = () => (
  <Wrap>
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        <Prompt>$ open --contact</Prompt>
        <Heading>What's next? — Get In <span>Touch</span></Heading>
        <Sub>
          Always open to new opportunities, collaborations, and interesting projects. Drop me a line and I'll get back to you.
        </Sub>
        <Divider />
      </motion.div>

      <motion.div variants={item}>
        <EmailBtn href="mailto:bsncetijunior@gmail.com">
          [ bsncetijunior@gmail.com ]
        </EmailBtn>
      </motion.div>

      <motion.div variants={item}>
        <SectionLabel>// profiles</SectionLabel>
        <SocialList>
          <SocialItem href="https://github.com/cetijunior" target="_blank" rel="noopener noreferrer">
            <SocialIconImg src={Github} alt="GitHub" />
            <SocialLabel>GitHub</SocialLabel>
            <SocialHandle>@cetijunior</SocialHandle>
          </SocialItem>
          <SocialItem href="https://www.linkedin.com/in/shefqet-cj-lame/" target="_blank" rel="noopener noreferrer">
            <SocialIconImg src={Linkedin} alt="LinkedIn" />
            <SocialLabel>LinkedIn</SocialLabel>
            <SocialHandle>Shefqet Lame</SocialHandle>
          </SocialItem>
          <SocialItem href="https://instagram.com/cplusplusj" target="_blank" rel="noopener noreferrer">
            <SocialIconSvg><IgSvg /></SocialIconSvg>
            <SocialLabel>Instagram</SocialLabel>
            <SocialHandle>@cplusplusj</SocialHandle>
          </SocialItem>
        </SocialList>
      </motion.div>

      <motion.div variants={item}>
        <ResumeBtn
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Mgiqq5mZZTfvpkINffIH3dU66WOjPaUd/view?usp=sharing",
              "_blank"
            )
          }
        >
          [ Download Resume ]
        </ResumeBtn>
      </motion.div>
    </motion.div>
  </Wrap>
);

export default Contact;
