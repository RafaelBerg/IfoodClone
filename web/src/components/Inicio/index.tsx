import { useContext } from "react"
import { LojaContext } from "../contexts/LojaContext"

export const Inicio = () => {
    const contextLoja = useContext(LojaContext)
    return(
        <div className="flex flex-col m-14">
            <h1 className="font-bold text-2xl">Olá, {contextLoja.loja.nome} </h1>
            <div className="flex gap-4 justify-center items-center mt-12">
                <div className="bg-gray-150 p-8 w-96 h-40 rounded-md flex flex-col gap-3">
                    <h2 className="text-gray-600">Horario de Funcionamento</h2>
                    <p className="font-bold text-2xl">{/* horario */}24horas</p>
                </div>
                <div className="bg-gray-150 p-8 w-96 h-40 rounded-md flex flex-col gap-3">
                    <h2 className="text-gray-600">Itens Pausados no Cardápio</h2>
                    <p className="font-bold text-4xl">{/* qntd */}0</p>
                </div>
            </div>
        </div>
    )
}