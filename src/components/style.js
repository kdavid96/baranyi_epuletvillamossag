import styled from "styled-components";
import { AiOutlineCopyright } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 45%;
   bottom: 160px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #88D136;
   background-color: transparent;
`

export const Copyright = styled(AiOutlineCopyright)`
   position: relative;
   top: -2px;
`;

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const NavbarContainer = styled(Container)`
   display: flex;
`;

export const MobileNavContainer = styled.div`
   height: 60px;
   width: 100vw;
   background-color: #88D136;
   color: white;
   display: flex;
   flex-direction: row;
   align-items: center;
   position: fixed;
   z-index: 1020;
`;

export const MobileNavNav = styled.ul`
   width: 100%;
   position: relative;
   padding: 0;
   margin: 0;
   left: 0;
   list-style-type: none;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
`;