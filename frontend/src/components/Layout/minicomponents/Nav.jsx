import UserName from "../../Login/UserName";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const Nav = () => {
    const [isEnter, setIsEnter] = useState(true);

    useEffect(() => {
        setIsEnter(false);
    }, []);

    return <NavScreen className={isEnter&&"isEnter"}>
                <UserName className={"nav"} />
                <ul>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/register"><li>Crear Cuenta</li></Link>
                    <Link to="/login"><li>Iniciar Sesion</li></Link>
                </ul>

            </NavScreen>
}

const NavScreen = styledComponents.div`
    z-index: 1;
    &.isEnter {
        transform: translateX(100vw);
    }

    background: #FFF;
    position: absolute;
    top: 100px; right: 0;
    width: 80%; height: 87.5vh;
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    transition: all 100ms ease-in-out;
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
        padding: 0 2rem;
        li {
            text-decoration: none;
            list-style: none;
            color: #000;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 23px;
            &::after {
                content: "";
                display: block;
                position: absolute;
                right: 6vw;
                width: 65vw;
                height: 1px;
                background: #000;
            }
            &:last-child::after {
                display: none;
            }
        }

    }
}
`



export default Nav;