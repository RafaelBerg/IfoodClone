import { useContext, useEffect, useState } from "react"
import { api } from "../../../lib/axios"
import { PedidoContext } from "../../contexts/PedidoContext"
import { VisibleContext } from "../../contexts/VisibleContext"

type Itens = {
   id: number
   nome: boolean
   qntd: number
   pedido_fk: number
   status: boolean
   preco: number
   loja_fk: string
}[]

interface CardProps{
   reset: boolean,
   setReset: Function
   id: string,
   itens?: Itens
   status: string
}

export const CardPedido = (props: CardProps) => {
   const { reset, setReset } = props
   const contextVisible = useContext(VisibleContext)
   const { inicioVisible } = contextVisible.visible
   const context = useContext(PedidoContext)

   const [itens, setItens] = useState<Itens>()
   const [selected,setSelected] = useState(false)

   useEffect(() => {
      api.get(`itens?pedido=${props.id}`).then((response)=>{
         setItens(response.data)
      })
   },[]) 

   const style = selected ? "bg-gray-150 flex flex-col gap-3 pl-7 py-3 border-l-8 border-red-600 border-y-2 border-y-gray-150" 
   : "flex flex-col gap-3 pl-7 py-3 border-y-2 border-y-gray-1500"

   useEffect(() => {
      inicioVisible === true ? setSelected(false) : ""
   }, [inicioVisible])

   useEffect(() => {
      setSelected(false)
   },[reset])

    return(
       <div className={`${style} cursor-pointer hover:bg-gray-150 ease-in-out duration-300`} 
         onClick={()=> {             
            contextVisible.setVisible({inicioVisible: false, detalhesVisible: true, cardapioVisible: false, cadastroVisible: false})                   
            setReset(!reset)
            setTimeout(() => setSelected(true), 0);
            context.setPedido({numero: props.id, itens: itens})                                  
            }
         }
       >
          <p className="font-semibold">#{props.id}</p>
          <p>{props.status === "pendente" ? "Confirme o pedido!" : props.status === "confirmado" ? "Entregue o pedido!" : "Concluído"}</p>
       </div>
    )
}