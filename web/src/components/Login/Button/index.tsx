import { MouseEventHandler } from "react"

interface ButtonProps{
    texto: string
    fn: MouseEventHandler
}

export const Button = (props: ButtonProps) => {
    return(
        <button className="bg-red-600 mt-6 text-white px-4 py-3 rounded-md border" onClick={props.fn}>{props.texto}</button>
    )
}