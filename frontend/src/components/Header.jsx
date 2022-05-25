import Logo from "./minicomponents/Logo";
import styledComponents from "styled-components";
import { useState } from "react";
import Nav from "./Nav";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = (params) => {
    const [showNav, setShowNav] = useState(false);

    return <HeaderDiv>
        <LogoSlogan><Logo/><span>Sentite como en tu hogar</span></LogoSlogan>
        <LogoSlogan><Button>Crear Cuenta</Button><Button>Iniciar Sesion</Button></LogoSlogan>
        <div>
            <NavIcon onClick={() => {setShowNav(!showNav)}}><GiHamburgerMenu/></NavIcon>
            {showNav && <Nav />}
        </div>
    </HeaderDiv>
}



const HeaderDiv = styledComponents.div`
    background: #FFF;
    padding: 0 1rem;
    top: 0;
    width: 100%; height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    transition: all 300ms ease-in-out;
    div {
        &:last-child {
            display:none;
        }
        @media only screen and (max-width: 600px) {

            &:last-child {
                display:block;
            }

    `

const LogoSlogan = styledComponents.div`
    display: flex;
    align-items: end;
    gap: 2vw;
    span {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
    }
    @media only screen and (max-width: 600px) {
        span {
            display: none;
        }
    }
    @media only screen and (min-width: 600px) {
        span {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) {
        span {
            display: inline;
        }
    }
    @media only screen and (max-width: 600px) {
        &:nth-child(2) {
            display: none;
        }
    }



    `

const NavIcon = styledComponents.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
        font-size: 24px;
    }
    `

const Button = styledComponents.button`
    
    @media only screen and (min-width: 600px) {
        width: 164px;
    }
    @media only screen and (min-width: 768px) {
        width: 206px;
    }
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    gap: 10px;

    background: #FFFFFF;
    border: 1px solid #1DBEB4;
    border-radius: 5px;

    font-style: normal;
    font-size: 16px;
    line-height: 19px;

    color: #1DBEB4;
`

export default Header;