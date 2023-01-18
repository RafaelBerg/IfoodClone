import { useState } from "react"
import { MenuIcon } from "./MenuIcon"

export const MenuLateral = () => {
    const [reset, setReset] = useState(false)
    
    return(
        <div className="flex flex-col text-center">
            <ul className="bg-gray-350 w-22 text-white h-full-size">                
                <MenuIcon  interfaceVisible="inicio" reset={reset} setReset={setReset} nome="Inicio" />
                <MenuIcon  interfaceVisible="cardapio" reset={reset} setReset={setReset} nome="Cardápio" />
            </ul>
            <ul className="bg-gray-350 w-22 text-white">
                <MenuIcon  interfaceVisible="config" reset={reset} setReset={setReset} nome="Config" />
            </ul>
        </div>
    )
}