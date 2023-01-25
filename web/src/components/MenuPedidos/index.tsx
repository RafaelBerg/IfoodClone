import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"
import { CardPedido } from "./CardPedido"

type Pedidos = {
    id: number
    concluido: boolean
    loja_fk: string
    cliente_fk: string
}[]


export const MenuPedidos = () => {
    const contextLoja = useContext(LojaContext)
    
    const [pedidos, setPedidos] = useState<Pedidos>()

    function atualizarPedidos() {
        setTimeout(() => {
            api.get(`pedidos?loja=${contextLoja.loja.nome}`).then((response)=>{
                setPedidos(response.data)
            })
            atualizarPedidos()
    }, 5000)}

    useEffect(() => {
        api.get(`pedidos?loja=${contextLoja.loja.nome}`).then((response)=>{
            setPedidos(response.data)
        })
        atualizarPedidos()
    },[contextLoja.loja.nome])

    
    
    const [reset, setReset] = useState(false)
    const [search, setSearch] = useState("")
    
    return(
       <div className="shadow-2xl w-96 flex flex-col justify-between">
            <div>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-80 border border-gray-400 rounded-sm mx-7 mt-3 p-3" type="text" placeholder="Buscar Pedido"></input>
                <h2 className="bg-gray-150 mt-3 pl-7 py-2 border-y-2 border-gray-200">
                    Pendente X
                </h2>
                <div className="overflow-y-scroll max-h-100 flex flex-col-reverse">
                    {pedidos?.filter((pedido) => {
                        return pedido.id.toString().includes(search)
                    }).map((props)=> {
                        return(
                            <CardPedido key={props.id} id={props.id.toString()} reset={reset} setReset={setReset} />
                        )})}                                                                                                                      
                </div>
            </div>
            <div className="shadow-[0_10px_55px_-15px_rgba(0,0,0,7)] p-4 rounded-md ">
                <h2 className="font-semibold">Resumo de Vendas</h2>  
                <p className="text-sm text-gray-600">X pedido concluido</p>         
            </div>
       </div>
    )
}