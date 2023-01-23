import { useContext, useEffect, useState } from "react"
import { VisibleContext } from "../../contexts/VisibleContext"

interface MenuIconProps{
    interfaceVisible: string
    reset: boolean
    setReset: Function
}

export const MenuIcon = (props: MenuIconProps) => {
    const contextVisible = useContext(VisibleContext)
    const [selected, setSelected] = useState(false)
    const { reset, setReset } = props

    const inicio = props.interfaceVisible === "Inicio" ? true : false
    var cardapio = !inicio
    var config = false 
    if(props.interfaceVisible === "Config"){
        cardapio = false
        config = true
    }

    useEffect(() => {
        setSelected(false)
     },[reset])

    const style = selected ? "cursor-pointer flex flex-col items-center gap-1 bg-gray-select rounded-lg px-3 py-3 m-1" : "cursor-pointer flex flex-col items-center gap-1 px-3 py-3 m-1 hover:bg-gray-select hover:rounded-lg"
    return(
        <li className={style} onClick={() => {
            contextVisible.setVisible({
                inicioVisible: inicio, 
                detalhesVisible: false, 
                cardapioVisible: cardapio, 
                cadastroVisible: false,
                configVisible: config
            })
            setReset(!reset)
            setTimeout(() => setSelected(true), 0);         
        }}>
            <img className="h-6 w-6" src={`src\/assets\/${props.interfaceVisible}.png`}/>
            {props.interfaceVisible}
        </li>
    )
}