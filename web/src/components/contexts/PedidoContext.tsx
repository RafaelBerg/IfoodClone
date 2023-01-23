import React, { ReactNode, useState } from "react";

type PedidoContextProps = {
    children: ReactNode
}

type PedidoContextType = {
    pedido: any,
    setPedido: any
}

const initialValues = {
    pedido: {},
    setPedido: () => {}
}

export const PedidoContext = React.createContext<PedidoContextType>(initialValues)

export const PedidoContextProvider = ({children}: PedidoContextProps) => {
    const [pedido, setPedido] = useState({initialValues})
    
    return(
        <PedidoContext.Provider value={{pedido, setPedido}}>
            {children}
        </PedidoContext.Provider>
    )
}