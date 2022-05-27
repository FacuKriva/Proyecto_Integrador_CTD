import styledComponents from "styled-components";
import { useNavigate } from "react-router-dom";

const UserName = ({className}) => { 
    const Navigate = useNavigate();
    if (!localStorage.getItem("login?")) return null;


    const user = JSON.parse(localStorage.getItem("user"));
    const nombre = user.nombre + " " + user.apellido;


    
    return <Div className={className}>
    Hola, {nombre} 
    <Icono>
        <p>
        {nombre.split(" ").reduce((acc, e)=>acc+e[0], "")}
        </p>
    </Icono>
        <Button onClick={() => {Navigate("/logout");}}>Cerrar Sesión</Button></Div> ; 
 }

 const Div = styledComponents.div`
    &.header {
        @media only screen and (max-width: 600px) {
            display:none;
        }
        display:flex;
        gap: 1rem;
        align-items: center;
        > :nth-child(1) {
            margin-right: 2rem;
        }
    }
    &.nav {
        @media only screen and (min-width: 600px) {
            display:none;
        }
        display:flex;
        justify-content: flex-end;
        align-items: center;
        gap: 3vw;
        padding: 0 1rem 2rem;
        background: var(--color-primary);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 8rem;
        >p {
            border: 1px solid black;
            background: white;
        }
        button {
            display: none;
        }
    }`;

 const Icono = styledComponents.p`
    background: var(--color-primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
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

export default UserName;