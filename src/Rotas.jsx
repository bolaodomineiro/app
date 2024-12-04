import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Rule from "./pages/regulation/Rule";
import FaqSection from "./pages/faq/FaqSection.";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import { useAuthContext } from "./context/AuthContext"

export const Rotas = () => {

    const { Authenticated } = useAuthContext();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rule" element={<Rule />} />
                <Route path="/FaqSection" element={<FaqSection />} />
                { !Authenticated && <Route path="/Login" element={<Login />} /> }
                { !Authenticated && <Route path="/Register" element={<Register />} />}
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </>
    )
}