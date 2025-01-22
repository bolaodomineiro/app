import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Rule from "./pages/regulation/Rule";
import FaqSection from "./pages/faq/FaqSection.";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";

export const Rotas = () => {

    const getToken = localStorage.getItem("token");

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rule" element={<Rule />} />
                <Route path="/FaqSection" element={<FaqSection />} />
                { !getToken ? <Route path="/Login" element={<Login />} />  : <Route path="/Login" element={<Home />} />}
                { !getToken ? <Route path="/Register" element={<Register />} /> : <Route path="/Register" element={<Home />} />}
                { !getToken ? <Route path="/passwordRecovery" element={<PasswordRecovery />} /> : <Route path="/PasswordRecovery" element={<Home />} />}
                {/* <Route path="*" element={<NotFoundPage/>} /> */}
            </Routes>
        </>
    )
}