import "./styles/global.css"
import config from "../config.json"
import React, { useState } from "react";

import { Header } from './components/Header';
import { MenuLateral } from "./components/MenuLateral";
import { MenuPedidos } from "./components/MenuPedidos";
import { Inicio } from "./components/Inicio";
import { DetalhesPedido } from "./components/DetalhesPedido";
import { PedidoContextProvider } from "./components/contexts/PedidoContext";


function App() {
  const [inicioVisible, setInicioVisible] = useState(true)
  
  return (
    <>
      <Header />
      <body id="body" className="flex">
        <MenuLateral setInicioVisible={setInicioVisible}/>
        <PedidoContextProvider>
          <MenuPedidos config={config} inicioVisible={inicioVisible} setInicioVisible={setInicioVisible}/>  
          {!inicioVisible && <DetalhesPedido />}        
        </PedidoContextProvider>
        {inicioVisible && <Inicio />}
      </body>         
    </>
  )
}

export default App
