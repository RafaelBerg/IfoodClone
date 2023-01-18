import { useEffect, useState } from "react"

interface MenuIconProps{
    nome: string
    fn?: Function
    reset: boolean
    setReset: Function
}

export const MenuIcon = (props: MenuIconProps) => {
    const [selected, setSelected] = useState(false)
    const {reset, setReset} = props

    useEffect(() => {
        setSelected(false)
     },[reset])

    const style = selected ? "cursor-pointer flex flex-col items-center gap-1 bg-gray-select rounded-lg px-3 py-3 m-1" : "cursor-pointer flex flex-col items-center gap-1 px-3 py-3 m-1 hover:bg-gray-select hover:rounded-lg"
    return(
        <li className={style} onClick={() => {
            setReset(!reset)
            setTimeout(() => setSelected(true), 0);
            props.fn? props.fn(true) : ""
        }}>
            <img className="h-6 w-6" src={`src\/assets\/${props.nome}.png`}/>
            {props.nome}
        </li>
    )
}