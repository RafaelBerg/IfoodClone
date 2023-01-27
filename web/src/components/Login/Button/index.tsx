import { MouseEventHandler } from "react"

interface ButtonProps{
    texto: string
    fn: MouseEventHandler
}

export const Button = (props: ButtonProps) => {
    return(
        <button className="bg-red-600 mt-6 text-white px-4 py-2 rounded-md border text-lg hover:bg-red-500 ease-in-out duration-200" onClick={props.fn}>{props.texto}</button>
    )
}