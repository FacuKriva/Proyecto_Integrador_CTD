import Header from "./PrincipalElements/Header";
import Footer from "./PrincipalElements/Footer";
import Body from "./PrincipalElements/Body";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Logout from "../Redireccionadores/Logout";
import { BrowserRouter, Routes,
    Route } from "react-router-dom";

const TemplateResponsive = () => { 
    return <div style={{"background":"rgba(196, 196, 196, .2)", "paddingTop":"100px"}}><BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
    </BrowserRouter></div>
}



export default TemplateResponsive;