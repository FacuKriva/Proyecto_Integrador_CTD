import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import styledComponents from "styled-components";

const HandleForm = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return <div>
        
        <div className="form-group">
            <button className="btn btn-primary" onClick={() => {setShowForm(!showForm)}}>{isLogin?"Registrarse":"Iniciar Sesion"}</button>
        </div>
          {showForm && (<DIV>{isLogin? <Login swapComponent={() => setIsLogin(false)}/> : <Register swapComponent={() => setIsLogin(true)}/>}</DIV>)}
        
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