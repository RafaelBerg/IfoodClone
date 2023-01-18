import { useState } from "react"
import { CardPedido } from "./CardPedido"

interface MenuProps{
    config: any
}

export const MenuPedidos = (props: MenuProps) => {
    const { config } = props
    const [reset, setReset] = useState(false)
    const [search, setSearch] = useState("")
    
    return(
       <div className="shadow-2xl w-96 flex flex-col justify-between">
            <div>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-80 border border-gray-400 rounded-sm mx-7 mt-3 p-3" type="text" placeholder="Buscar Pedido"></input>
                <h2 className="bg-gray-150 mt-3 pl-7 py-2 border-y-2 border-gray-200">
                    Pendente X
                </h2>
                <div className="overflow-y-scroll max-h-100">
                    {config.pedidos.filter((pedido) => {
                        return pedido.numero.includes(search)
                    }).map((props)=> {
                        return(
                            <CardPedido key={props.numero} numero={props.numero} itens={props.itens} reset={reset} setReset={setReset} />
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