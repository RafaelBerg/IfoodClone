import { useState } from "react"
import { MenuIcon } from "./MenuIcon"

export const MenuLateral = () => {
    const [reset, setReset] = useState(false)
    
    return(
        <div className="flex flex-col justify-between text-white bg-gray-350">
            <ul className="w-22">                
                <MenuIcon  interfaceVisible="Inicio" reset={reset} setReset={setReset}/>
                <MenuIcon  interfaceVisible="Cardápio" reset={reset} setReset={setReset}/>
            </ul>
            <ul className="w-22 ">
                <MenuIcon  interfaceVisible="Config" reset={reset} setReset={setReset}/>
            </ul>
        </div>
    )
}