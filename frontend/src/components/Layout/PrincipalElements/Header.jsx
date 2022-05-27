import Logo from "../minicomponents/Logo";
import UserName from "../../Login/UserName";
import Nav from "../minicomponents/Nav";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoIosArrowBack} from "react-icons/io";
import {Routes, Route, Link} from "react-router-dom";
import styledComponents from "styled-components";
const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return <HeaderDiv>

        <LogoSlogan><Link to="/"><Logo/></Link><Link to="/"><span>
            {["¿Con barba? Barbudos", "Viajes, con barba y birras", "¿Hotel? Con barba", "Sentite como en casa", "Viajes a precios incomparables", "¿No nos crees?, preguntá a Maga"][Math.floor(Math.random() * 6)]}
        </span></Link></LogoSlogan>
        <LogoSlogan>
        
        {localStorage.getItem("login?")?<UserName className={"header"} />:

        <Routes>
            <Route path="/" element={<><Link to="/register"><Button>Crear Cuenta</Button></Link><Link to="/login"><Button>Iniciar Sesion</Button></Link></>} />
            <Route path="/register" element={<><Link to="/"><Button>Inicio</Button></Link><Link to="/login"><Button>Iniciar Sesion</Button></Link></>} />
            <Route path="/login" element={<><Link to="/"><Button>Inicio</Button></Link><Link to="/register"><Button>Crear Cuenta</Button></Link></>} />
        </Routes>
        }
        
        </LogoSlogan>
        <div className="burger">
            <NavIcon onClick={() => {setShowNav(!showNav)}}>{showNav?<IoIosArrowBack/>:<GiHamburgerMenu/>}</NavIcon>
            {showNav && <Nav />}
        </div>
    </HeaderDiv>
}




const HeaderDiv = styledComponents.div`
    z-index: 10;
    background: #FFF;
    padding: 0 1rem;
    top: 0;
    width: 100%; height:100px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    transition: all 300ms ease-in-out;
    .burger {
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
    a {
        text-decoration: none;
    }
    span {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
    }
    img {
        height: 75px;
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
    margin-right: 2rem;
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