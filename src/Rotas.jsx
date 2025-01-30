import { Routes, Route, } from "react-router-dom";
import Home from "./pages/home/Home";
import Rule from "./pages/regulation/Rule";
import FaqSection from "./pages/faq/FaqSection.";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";
import ResetPassword from "./pages/passwordRecovery/ResetPassword";
import Layout from "./pages/layout/Layout";

export const Rotas = () => {

    return (
        <>
        <Routes>
            {/* Rotas com o layout principal */}
            <Route path="/" element={<Layout />}>
                <Route index={true} element={<Home />} />
                <Route path="/Rule" element={<Rule />} />
                <Route path="/FaqSection" element={<FaqSection />} />
                <Route path="/Login" element={<Login />} /> 
                <Route path="/Register" element={<Register />} /> 
                <Route path="/Register" element={<Home />} />
                <Route path="/PasswordRecovery" element={<PasswordRecovery />} /> 
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        </>
    );
};
