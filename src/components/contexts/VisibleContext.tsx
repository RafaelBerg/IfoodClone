import React, { ReactNode, useState } from "react";

type VisibleContextProps = {
    children: ReactNode
}

type VisibleContextType = {
    visible: any,
    setVisible: any
}

const initialValues = {
    visible: {},
    setVisible: () => {}
}

export const VisibleContext = React.createContext<VisibleContextType>(initialValues)

export const VisibleContextProvider = ({children}: VisibleContextProps) => {
    const [visible, setVisible] = useState({initialValues})
    
    return(
        <VisibleContext.Provider value={{visible, setVisible}}>
            {children}
        </VisibleContext.Provider>
    )
}