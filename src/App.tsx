import "./styles/global.css"
import config from "../config.json"
import { useContext, useEffect } from "react";

import { Header } from './components/Header';
import { MenuLateral } from "./components/MenuLateral";
import { MenuPedidos } from "./components/MenuPedidos";
import { Inicio } from "./components/Inicio";
import { DetalhesPedido } from "./components/DetalhesPedido";
import { PedidoContextProvider } from "./components/contexts/PedidoContext";
import { Cardapio } from "./components/Cardapio";
import { VisibleContext } from "./components/contexts/VisibleContext";
import { CadastroItem } from "./components/CadastroItem";
import { Config } from "./components/Config";
import { Login } from "./Login";

function App() {
  const contextVisible = useContext(VisibleContext)

  useEffect(()=> {
    contextVisible.setVisible({inicioVisible: true, 
      detalhesVisible: false, 
      cardapioVisible: false, 
      cadastroVisible: false,
      configVisible: false,
      loginVisible: true
    })
  },[])

  const {inicioVisible, detalhesVisible, cardapioVisible, cadastroVisible, configVisible, loginVisible } = contextVisible.visible

  return (
    <> 
      {loginVisible ? 
        <Login /> : 
        <>
          <Header />
          <body className="flex">
            <MenuLateral />
            <PedidoContextProvider>
              {(!cardapioVisible && !configVisible) && <MenuPedidos config={config}/>}  
              {detalhesVisible && <DetalhesPedido />}        
            </PedidoContextProvider>
            {inicioVisible && <Inicio />}
            {cardapioVisible && <Cardapio />}
            {cadastroVisible && <CadastroItem />}
            {configVisible &&  <Config />}
          </body>  
      </>}   
    </>
  )
}

export default App
