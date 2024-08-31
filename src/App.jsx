import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Baseboard from "./components/footer/Baseboard";
import { Rotas }from './Rotas.jsx';

function App() {
  return (
    <section style={{ overflowX: "hidden"}}>
      <Header />
      <Rotas/>
      <Baseboard />
    </section>
  );
}

export default App;
