import Header from "./Header";
import Footer from "./Footer";
import Body from "../Listado/Body";
import Login from "../Login/Login";
import Register from "../Login/Register";
import { BrowserRouter, Routes,
    Route } from "react-router-dom";
import { useState } from "react";

const TemplateResponsive = () => { 
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    return <div style={{"background":"rgba(196, 196, 196, .2)"}}><BrowserRouter>
        <Header isLogin={isLogin} user={user} setIsLogin={setIsLogin} setUser={setUser} />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login handleClick={(userLogin) => {
                console.log(userLogin);
                if(userLogin.correoElectronico === user?.correoElectronico && userLogin.contrasena === user?.contrasena) {
                    setIsLogin(true);
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
            }}/>} />
            <Route path="/register" element={<Register handleClick={setUser}/>} />
        </Routes>
        <Footer />
    </BrowserRouter></div>
}



export default TemplateResponsive;