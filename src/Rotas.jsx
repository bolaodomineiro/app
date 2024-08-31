import { Routes, Route } from "react-router-dom";

import  Home  from "./pages/home/Home";
import  Rule  from "./pages/regulation/Rule";

export const Rotas = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rule" element={<Rule />} />
            </Routes>
        </>
    )
}