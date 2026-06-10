import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
import { Link, Outlet, useLocation } from "react-router-dom";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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

const Terminal = styled.div`
  height: calc(100vh - 48px);
  width: calc(100vw - 48px);
  border: 1px solid rgba(195, 195, 195, 0.2);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease forwards;

  @media (max-width: 768px) {
    height: calc(100vh - 20px);
    width: calc(100vw - 20px);
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 260px;
  min-width: 260px;
  height: 100%;
  border-right: 1px solid rgba(195, 195, 195, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    height: auto;
    border-right: none;
    border-bottom: 1px solid rgba(195, 195, 195, 0.1);
    padding: 1rem 1.25rem;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    flex: 1;
  }
`;

const NameBlock = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Name = styled.h1`
  font-weight: 200;
  font-size: 22px;
  color: #e0e0e0;
  line-height: 1.3;
  margin: 0 0 0.4rem;
`;

const TypedLine = styled.div`
  font-size: 13px;
  color: #006633;
  min-height: 18px;

  pre {
    margin: 0;
    font-family: inherit;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 4px;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 7px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#fff" : "#666")};
  background: ${({ $active }) => ($active ? "#006633" : "transparent")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  transition: all 0.18s;

  &:hover {
    background: ${({ $active }) => ($active ? "#006633" : "rgba(0,102,51,0.25)")};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

const NavArrow = styled.span`
  color: #006633;
  font-size: 15px;
  line-height: 1;
`;

const NavSub = styled.span`
  font-size: 10px;
  opacity: 0.45;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: #1a1a1a;
  padding: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #006633;
  }
`;

const SocialSvgBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: #1a1a1a;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;

  svg {
    fill: #888;
    transition: fill 0.2s;
  }

  &:hover {
    background: #006633;
    svg { fill: #fff; }
  }
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  color: #555;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00cc66;
  box-shadow: 0 0 6px #00cc66;
  display: inline-block;
  flex-shrink: 0;
`;

const ContentPanel = styled.main`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: #006633; border-radius: 10px; }
  &::-webkit-scrollbar-track { background: transparent; }

  @media (max-width: 768px) {
    flex: 1;
    min-height: 0;
  }
`;

const IgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const typed = new Typed(".web-developer", {
      strings: [".web developer", ".mobile developer", ".typescript enthusiast", ".ios developer", ".part-time producer", ".get in touch!"],
      startDelay: 400,
      typeSpeed: 70,
      backDelay: 500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const navLinks = [
    { to: "/", label: "Home", sub: "Kryesore" },
    { to: "/Skills", label: "Skills", sub: "Aftësi" },
    { to: "/Projects", label: "Projects", sub: "Projekte" },
    { to: "/Experience", label: "Experience", sub: "Përvojë" },
    { to: "/Contact", label: "Contact", sub: "Kontakt" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <Background>
      <Terminal>
        <Sidebar>
          <SidebarTop>
            <NameBlock>
              <Name>
                Shefqet
                <span style={{ color: "#006633" }}>"CJ"</span>
                Lame
              </Name>
              <TypedLine>
                <pre className="web-developer" />
              </TypedLine>
            </NameBlock>

            <Nav>
              {navLinks.map(({ to, label, sub }) => (
                <Link key={to} to={to} style={{ textDecoration: "none" }}>
                  <NavItem $active={isActive(to)}>
                    <NavArrow>›</NavArrow>
                    {label}
                    <NavSub>// {sub}</NavSub>
                  </NavItem>
                </Link>
              ))}
            </Nav>
          </SidebarTop>

          <SidebarBottom>
            <SocialRow>
              <a href="https://github.com/cetijunior" target="_blank" rel="noopener noreferrer">
                <SocialImg src={Github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/shefqet-cj-lame/" target="_blank" rel="noopener noreferrer">
                <SocialImg src={Linkedin} alt="LinkedIn" />
              </a>
              <SocialSvgBtn href="https://instagram.com/cplusplusj" target="_blank" rel="noopener noreferrer">
                <IgIcon />
              </SocialSvgBtn>
            </SocialRow>
            <StatusRow>
              <Dot /> open to opportunities
            </StatusRow>
          </SidebarBottom>
        </Sidebar>

        <ContentPanel>
          <Outlet />
        </ContentPanel>
      </Terminal>
    </Background>
  );
};

export default Home;
