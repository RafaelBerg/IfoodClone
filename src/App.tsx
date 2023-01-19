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

function App() {
  const contextVisible = useContext(VisibleContext)

  useEffect(()=> {
    contextVisible.setVisible({inicioVisible: true, detalhesVisible: false, cardapioVisible: false, cadastroVisible: false})
  },[])

  const {inicioVisible, detalhesVisible, cardapioVisible, cadastroVisible } = contextVisible.visible

  return (
    <>            
      <Header />
      <body className="flex">
        <MenuLateral />
        <PedidoContextProvider>
          {!cardapioVisible && <MenuPedidos config={config}/>}  
          {detalhesVisible && <DetalhesPedido />}        
        </PedidoContextProvider>
        {inicioVisible && <Inicio />}
        {cardapioVisible && <Cardapio />}
        {cadastroVisible && <CadastroItem />}
      </body>         
    </>
  )
}

export default App
