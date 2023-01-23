import { useState } from "react"
import { MenuIcon } from "./MenuIcon"

export const MenuLateral = () => {
    const [reset, setReset] = useState(false)
    
    return(
        <div className="flex flex-col text-center">
            <ul className="bg-gray-350 w-22 text-white h-full-size">                
                <MenuIcon  interfaceVisible="Inicio" reset={reset} setReset={setReset}/>
                <MenuIcon  interfaceVisible="Cardápio" reset={reset} setReset={setReset}/>
            </ul>
            <ul className="bg-gray-350 w-22 text-white">
                <MenuIcon  interfaceVisible="Config" reset={reset} setReset={setReset}/>
            </ul>
        </div>
    )
}