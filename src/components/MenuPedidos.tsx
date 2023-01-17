import { useState } from "react"
import { CardPedido } from "./CardPedido"


interface MenuProps{
    inicioVisible: boolean,
    setInicioVisible: Function,
    config: any
}


export const MenuPedidos = (props: MenuProps) => {
    const {inicioVisible, setInicioVisible, config } = props
    const [reset, setReset] = useState(false)
    
    return(
       <div className="shadow-2xl w-96 flex flex-col justify-between">
            <div>
                <input className="w-80 border border-gray-400 rounded-sm mx-7 mt-3 p-3" type="text" placeholder="Buscar Pedido"></input>
                <h2 className="bg-gray-150 mt-3 pl-7 py-2 border-y-2 border-gray-200">
                    Pendente X
                </h2>
                <div className="overflow-y-scroll max-h-100">
                    {config.pedidos.map((props)=> {
                        return(
                            <CardPedido key={props.numero} numero={props.numero} itens={props.itens} reset={reset} setReset={setReset} inicioVisible={inicioVisible} setInicioVisible={setInicioVisible} />
                        )
                    })}                                                                                                       
                </div>
            </div>
            <div className="shadow-[0_10px_55px_-15px_rgba(0,0,0,7)] p-4 rounded-md ">
                <h2 className="font-semibold">Resumo de Vendas</h2>  
                <p className="text-sm text-gray-600">X pedido concluido</p>         
            </div>
       </div>
    )
}