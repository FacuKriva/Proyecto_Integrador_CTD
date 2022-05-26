import styledComponents from "styled-components";
import { useState, useEffect } from "react";

const Nav = () => {
    const [isEnter, setIsEnter] = useState(true);


    useEffect(() => {
        setIsEnter(false);
    }, []);

    return <NavScreen className={isEnter&&"isEnter"}>
                <ul>
                    <li>Inicio</li>
                    <li>Crear Cuenta</li>
                    <li>Iniciar Sesion</li>
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
    top: 80px; left: 0;
    width: 100%; height: 85vh;
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
                width: 90vw;
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