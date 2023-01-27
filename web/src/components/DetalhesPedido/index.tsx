import { useContext } from "react"
import { CardDetalhes } from "./CardDetalhes"
import { PedidoContext } from "../contexts/PedidoContext"

export const DetalhesPedido = () => {
    const context = useContext(PedidoContext)  
    let soma = 0
    return(
        <div className={"flex flex-col m-14 gap-10 w-full"}>
            <h1 className="text-3xl text-gray-600">Pedido #{context.pedido.numero}
            </h1>
            <div>              
                {context.pedido.itens?.map((item) => {
                    soma += parseInt(item.qntd) * parseFloat(item.preco) 
                    return(
                        <CardDetalhes key={item.nome} prato={item.nome} qntd={item.qntd} valor={item.preco.toFixed(2)} />
                    )              
                })}              
                <CardDetalhes prato={"Total: "} valor={soma.toFixed(2).toString()} />                                                        
            </div>
            <div className="flex justify-end gap-4 border-t-2 pt-4 border-gray-300">
                <button className="border border-red-600 rounded-md px-4 py-2 text-red-600 hover:scale-95 ease-in-out duration-200"
                >
                    Cancelar
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md border hover:scale-95 ease-in-out duration-200"
                >
                    Confirmar Pedido
                </button>
            </div>
        </div>
    )
}