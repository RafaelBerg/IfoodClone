import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"

export const Inicio = () => {
    const contextLoja = useContext(LojaContext)
    const [itensPausados, setItensPausados] = useState(0)  
    console.log(contextLoja.loja.horario_inicio) 

    useEffect(() => {
        api.get(`cardapio?loja=${contextLoja.loja.nome}`).then((response) => {
            let qntd = 0
            response.data.map((item) => {
                if(item.status === false){
                    qntd += 1
                }
            })
            setItensPausados(qntd)
        })
    },[])

    return(
        <div className="flex flex-col m-14">
            <h1 className="font-bold text-2xl">Olá, {contextLoja.loja.nome} </h1>
            <div className="flex gap-4 justify-center items-center mt-12">
                <div className="bg-gray-150 p-8 w-94 h-40 rounded-md flex flex-col gap-3">
                    <h2 className="text-gray-600">Horario de Funcionamento</h2>
                    <p className="font-bold text-2xl">{contextLoja.loja.horario_inicio.slice(11,16)}-{contextLoja.loja.horario_fim.slice(11,16)}</p>
                </div>
                <div className="bg-gray-150 p-8 w-96 h-40 rounded-md flex flex-col gap-3">
                    <h2 className="text-gray-600">Itens Pausados no Cardápio</h2>
                    <p className="font-bold text-4xl">{itensPausados}</p>
                </div>
            </div>
        </div>
    )
}