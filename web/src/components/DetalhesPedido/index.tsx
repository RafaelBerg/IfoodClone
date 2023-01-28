import { useContext, useEffect, useState } from "react"
import { CardDetalhes } from "./CardDetalhes"
import { PedidoContext } from "../contexts/PedidoContext"
import { api } from "../../lib/axios"

export const DetalhesPedido = () => {
    const context = useContext(PedidoContext)  
    const [status, setStatus] = useState("pendente")
    let total = 0

    useEffect(()=>{
        api.get(`pedido?id=${context.pedido.numero}`).then((response)=>{
            setStatus(response.data.status)
        })
    },[context.pedido.numero])

    return(
        <div className={"flex flex-col m-14 gap-10 w-full"}>
            <div>
                <h1 className="text-3xl text-gray-600 font-bold">Pedido #{context.pedido.numero}</h1>
                <p>Status do Pedido: <span className={status === "concluido" ? "text-green-500" : "text-red-500"}>{status[0].toUpperCase() + status.slice(1)}</span></p>
            </div>    
            <div>           
                {context.pedido.itens?.map((item) => {
                    total += parseInt(item.qntd) * parseFloat(item.preco) 
                    return(
                        <CardDetalhes key={item.nome} prato={item.nome} qntd={item.qntd} valor={item.preco.toFixed(2)} />
                    )              
                })}              
                <CardDetalhes prato={"Total: "} valor={total.toFixed(2).toString()} />                                                        
            </div>
            {status !== "concluido" ? 
            <div className="flex justify-end gap-4 border-t-2 pt-4 border-gray-300">
                {status === "confirmado" ? null: <button className="border border-red-600 rounded-md px-4 py-2 text-red-600 hover:scale-95 ease-in-out duration-200"
                >
                    Cancelar
                </button>}
                <button className="bg-red-600 disabled:opacity-40 text-white px-4 py-2 rounded-md border hover:scale-95 ease-in-out duration-200" 
                onClick={() => {
                    let changeStatus
                    if(status === "pendente") {setStatus("confirmado"); changeStatus = "confirmado"}
                    else if(status === "confirmado") {setStatus("concluido"); changeStatus = "concluido"}
                    api.post("/updPedido", {
                        id: parseInt(context.pedido.numero),
                        status: changeStatus
                    })
                }}
                >
                    {status === "confirmado" ? "Entregar Pedido!" : "Confirmar Pedido"}
                </button>
            </div> : null}        
        </div>
    )
}