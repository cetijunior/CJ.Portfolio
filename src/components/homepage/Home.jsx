import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js"; 
import { Link, Outlet } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 5%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inconsolata", monospace;

`;

const Container = styled.div`
  height: calc(100vh - 50px);
  width: calc(100vw - 30px);
  border: 1px solid #c3c3c3;
  background-color: hsl(0, 0%, 5%);
  position: fixed;
  animation: ${fadeIn} 1s ease-in-out forwards;

`;

const Header = styled.div`
  width: 16rem;
  height: 20rem;
  color: #c3c3c3;
  margin: 1.6rem;
`;

const H1 = styled.h1`
  font-weight: 200;
  font-size: 50px;
  width: 30rem;
  padding-bottom: 0.5rem;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Flex = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
  cursor: pointer;
  padding-top: 0rem;
  padding-bottom: 2rem;
  display: flex; /* Display list items horizontally */
  flex-wrap: wrap; /* Wrap list items to the next line if they don't fit */

  @media (max-width: 650px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid #ffff;
    border-bottom: 1px solid #ffff;
    border-color: #006633;
  }
`;

const Li = styled.li`
  padding-top: 0.8rem;
  font-weight: 900;
  margin-top: 2.5rem;
  margin-right: 20px; /* Add some space between list items */

  @media (max-width: 650px) {
    margin-top: 1rem;
    align-items: start
    padding: 0;
`;

const Home = () => {
  useEffect(() => {
    // Initialize Typed on the webD element
    const webD = new Typed(".web-developer", {
      strings: [".web developer", ".enthusiastic coder", ".get in touch!"],
      startDelay: 400,
      typeSpeed: 70,
      backDelay: 500,
      loop: true,
    });
    
    // Don't forget to destroy the Typed instance when the component unmounts
    return () => {
      webD.destroy();
    };
  }, []);

  return (
    <Background>
      <Container>
        <Header>
          <H1>
            Shefqet
            <span style={{color: '#006633'}}>"CJ"</span>
            Lame
          </H1>
          <Flex>
            <pre className="web-developer"></pre>
          </Flex>

          <Ul>
            <Li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home -- Faqja Kryesore
              </Link>
            </Li>
            <Li>
              <Link
                to="/Skills"
                style={{ textDecoration: "none", color: "white" }}
              >
                Skills -- Aftesite
              </Link>
            </Li>
            <Li>
              <Link
                to="/Projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects -- Projekte
              </Link>
            </Li>
            <Li>
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact -- Kontakto
              </Link>
            </Li>
          </Ul>

          <Outlet />
        </Header>
      </Container>
    </Background>
  );
};

export default Home;
