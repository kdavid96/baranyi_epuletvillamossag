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
   position: relative;
   left: 0;
   top: 0;
   padding: 0;
   margin: 0;
   width: 100vw;
   max-width: 1920px !important;
`;

export const MobileNavContainer = styled.div`
   height: 100vh;
   width: 25vw;
   background-color: white;
   box-shadow: 0 0 5px grey;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: fixed;
   z-index: 1020;
   min-width: 200px
`;

export const MobileNavNav = styled.ul`
   height: 75%;
   position: relative;
   padding: 0;
   margin: 0;
   left: 0;
   top: 25%;
   list-style-type: none;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;