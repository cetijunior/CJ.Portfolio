import Typed from "typed.js";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 5%);
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  display: flex;
  animation: ${fadeOut} 1s ease-in-out forwards 2s;
`;

const Splash = () => {
  const name = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(name.current, {
      strings: ["CJ. "],
      startDelay: 600,
      typeSpeed: 140,
      showCursor: false,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.stop(); 
        typedRef.current.destroy();
      }
    };
  }, []);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Removed the typedRef cleanup from here

  // Additional cleanup when the component is unmounted
  useEffect(() => {
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy(); 
      }
    };
  }, []);

  return (
    <Container>
      <Title show={show}>
        <pre ref={name}></pre>
        <pre id="portfolio">portfolio</pre>
      </Title>
    </Container>
  );
};

export default Splash;
