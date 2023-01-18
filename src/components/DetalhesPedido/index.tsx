import { useContext } from "react"
import { CardDetalhes } from "./CardDetalhes"
import { PedidoContext } from "../contexts/PedidoContext"

export const DetalhesPedido = () => {
    const context = useContext(PedidoContext)  
    let soma = 0

    return(
        <div className={"flex flex-col m-14 gap-10"}>
            <h1 className="text-3xl text-gray-600">Pedido # {context.pedido.numero}
                <strong className="font-bold text-4xl"> - </strong> 
                Feito às 
                <strong> 14:13</strong>
            </h1>
            <div>              
                {context.pedido.itens?.map((item) => {
                    soma += parseInt(item.qntd) * parseFloat(item.valor) 
                    return(
                        <CardDetalhes key={item.prato} prato={item.prato} qntd={item.qntd} valor={item.valor} />
                    )              
                })}              
                <CardDetalhes prato={"Total: "} valor={soma.toString()} />                                                        
            </div>
            <div className="flex justify-end gap-4 border-t-2 pt-4 border-gray-300">
                <button className="border border-red-600 rounded-md px-4 py-2 text-red-600"
                >
                    Cancelar
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md border"
                >
                    Confirmar Pedido
                </button>
            </div>
        </div>
    )
}