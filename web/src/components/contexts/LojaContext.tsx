import React, { ReactNode, useState } from "react";

type LojaContextProps = {
    children: ReactNode
}

type Loja = {
    nome: string
    email: string
    senha: string
}

type LojaContextType = {
    loja: Loja
    setLoja: Function
}

const initialValues = {
    loja: {
        nome: "",
        email: "",
        senha: ""
    },
    setLoja: () => {}
}

export const LojaContext = React.createContext<LojaContextType>(initialValues)

export const LojaContextProvider = ({children}: LojaContextProps) => {
    const [loja, setLoja] = useState({nome: "", email: "", senha: ""})
    
    return(
        <LojaContext.Provider value={{loja, setLoja}}>
            {children}
        </LojaContext.Provider>
    )
}