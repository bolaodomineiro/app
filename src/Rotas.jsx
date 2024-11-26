import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Rule from "./pages/regulation/Rule";
import FaqSection from "./pages/faq/FaqSection.";
import Login from "./pages/login/Login";

export const Rotas = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rule" element={<Rule />} />
                <Route path="/FaqSection" element={<FaqSection />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </>
    )
}