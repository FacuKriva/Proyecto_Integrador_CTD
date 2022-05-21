import styledComponents from "styled-components";
import InputLogin from "./minicomponents/InputLogin";
import AccountForm from "./AccountForm";
import PasswordInput from "./minicomponents/PasswordInput";

const Register = ({handleClick, swapComponent}) => {

    return (
        <AccountForm textBellow={<p>¿No tienes una cuenta? <A onClick={swapComponent}>Crear Cuenta</A></p>}>
            <Title>Iniciar Sesion</Title>
                <InputLogin id="nombre" type="text" label="Nombre" errorMessage="Debe tener mas de 3 caracteres."></InputLogin>
            <PasswordInput/>

            <Button type="submit" className="btn btn-primary">Iniciar sesion</Button>
        </AccountForm>
        
    );
}

const A = styledComponents.button`
    color: #4285f4;
    border: none;
    display: inline-block;
    background: none;
    `

const Title = styledComponents.legend`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--color-primary);
    margin-bottom: 30px;
    `

const Button = styledComponents.button`
    background: var(--color-primary);
    box-shadow: var(--button-shadow);
    margin-top: 26px;
    border-radius: 5px;
    border: none;
    height: 40px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;
`

const NombreApellido = styledComponents.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        > * {
            width: 48%;
        }
    }
    
    `
export default Register;