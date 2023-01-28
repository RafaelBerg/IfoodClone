import "./styles/global.css"
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
import { Login } from "./components/Login";

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
          <div className="flex">
            <MenuLateral />
            <PedidoContextProvider>
              {(!cardapioVisible && !configVisible) && <MenuPedidos />}  
              {detalhesVisible && <DetalhesPedido />}        
            </PedidoContextProvider>
            {inicioVisible && <Inicio />}
            {cardapioVisible && <Cardapio />}
            {cadastroVisible && <CadastroItem />}
            {configVisible &&  <Config />}
          </div>  
      </>}   
    </>
  )
}

export default App
