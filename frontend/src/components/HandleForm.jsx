import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import styledComponents from "styled-components";

const HandleForm = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [account, setAccount] = useState({});

    const login = (e) => {
        e.preventDefault();
        setShowForm(false);
    }

    const register = (e) => {
      e.preventDefault();
      e.target.querySelectorAll("input").forEach(input => {
        console.log(input.value);
        setAccount({
          ...account,
          [input.id]: input.value
        });
      });
        setShowForm(false);
    }

    return <div>
        
        <div className="form-group">
            <button className="btn btn-primary" onClick={() => {
              setShowForm(!showForm)
              document.querySelector("#root").classList.toggle("login")
              }}>{isLogin?"Registrarse":"Iniciar Sesion"}</button>
        </div>
          {showForm && (<DIV>{isLogin? <Login/> : <Register/>}</DIV>)}
          <div style={{"height": "200vh"}}></div>
        <style>
            {`
                .login {
                  overflow: hidden;
                  height: 100vh;
                }
                `}
        </style>
    </div>
}

const DIV = styledComponents.div`
  background: rgba(196, 196, 196, .2);
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  `



export default HandleForm;