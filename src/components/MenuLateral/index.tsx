import { useState } from "react"
import { MenuIcon } from "./MenuIcon"

interface MenuProps{
    setInicioVisible: Function
}

export const MenuLateral = (props: MenuProps) => {
    const {setInicioVisible } = props
    const [reset, setReset] = useState(false)

    return(
        <div className="flex flex-col text-center">
            <ul className="bg-gray-350 w-22 text-white h-full-size">                
                <MenuIcon reset={reset} setReset={setReset} nome="Inicio" fn={setInicioVisible}/>
                <MenuIcon reset={reset} setReset={setReset} nome="Cardápio"/>
            </ul>
            <ul className="bg-gray-350 w-22 text-white">
                <MenuIcon reset={reset} setReset={setReset} nome="Config" />
            </ul>
        </div>
    )
}