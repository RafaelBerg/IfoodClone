import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"
import { CardPedido } from "./CardPedido"

type Pedidos = {
    id: number
    status: string
    loja_fk: string
    cliente_fk: string
}[]


export const MenuPedidos = () => {
    const contextLoja = useContext(LojaContext)
    const [pedidos, setPedidos] = useState<Pedidos>()
    const [reset, setReset] = useState(false)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("Todos")
    const [concluidos, setConcluidos] = useState(0)

    function atualizarPedidos() {
        setTimeout(() => {
            api.get(`pedidos?loja=${contextLoja.loja.nome}`).then((response)=>{
                setPedidos(response.data)
            })
            atualizarPedidos()
    }, 3000)}

    useEffect(() => {
        api.get(`pedidos?loja=${contextLoja.loja.nome}`).then((response)=>{
            setPedidos(response.data)
        })
        atualizarPedidos()        
    },[contextLoja.loja.nome])

    useEffect(()=>{
        let count = 0
        pedidos?.map((pedido)=>{
            if(pedido.status === "concluido") count++ 
        })
        setConcluidos(count)
    },[pedidos])

    return(
       <div className="shadow-2xl flex flex-col justify-between max-h-screen">
            <div> 
                <div className="flex justify-center gap-4 mx-4">
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} className="border border-gray-400 rounded-sm w-42 mt-3 p-3" type="text" placeholder="Buscar Pedido"></input>
                    <select className="border border-gray-400 rounded-sm w-36 mt-3 p-3 text-black" onChange={(e) => {               
                        setFilter(e.target.value.replace("í", "i"))
                    }}>
                        <option selected>Todos</option>
                        <option>Pendente</option>
                        <option>Confirmado</option>
                        <option>Concluído</option>
                    </select>                    
                </div>    
                <h2 className="bg-gray-150 mt-3 pl-7 py-2 border-y-2 border-gray-200">
                    Pendente <span className="font-bold text-lg">{pedidos?.length? pedidos?.length-concluidos : null}</span>
                </h2>
                <div className="flex flex-col-reverse overflow-y-scroll max-h-110">
                    {pedidos?.filter((pedido) => {
                        return pedido.id.toString().includes(search) && (filter === "Todos" ? "todos" : pedido.status === filter.toLowerCase())
                    }).map((props)=> {
                        return(
                            <CardPedido key={props.id} status={props.status} id={props.id.toString()} reset={reset} setReset={setReset} />
                        )})}                                                                                                                   
                </div>
            </div>
            <div className="shadow-[0_10px_55px_-15px_rgba(0,0,0,7)] p-4 rounded-md">
                <h2 className="font-semibold">Resumo de Vendas</h2>  
                <p className="text-sm text-gray-600"><span className="font-bold text-lg">{concluidos}</span> {`${concluidos == 1 ? "Pedido concluído" : "Pedidos concluídos" }`}</p>         
            </div>
       </div>
    )
}