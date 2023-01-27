import React, { ReactNode, useState } from "react";

type LojaContextProps = {
    children: ReactNode
}

type Loja = {
    nome: string
    email: string
    senha: string
    status: boolean
    horario_inicio: string
    horario_fim: string
}

type LojaContextType = {
    loja: Loja
    setLoja: Function
}

const initialValues = {
    loja: {
        nome: "",
        email: "",
        senha: "",
        status: false,
        horario_inicio: "",
        horario_fim: ""

    },
    setLoja: () => {}
}

export const LojaContext = React.createContext<LojaContextType>(initialValues)

export const LojaContextProvider = ({children}: LojaContextProps) => {
    const [loja, setLoja] = useState({nome: "", email: "", senha: "", status: false, horario_inicio: "", horario_fim: ""})
    
    return(
        <LojaContext.Provider value={{loja, setLoja}}>
            {children}
        </LojaContext.Provider>
    )
}