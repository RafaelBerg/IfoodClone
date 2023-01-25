import { useContext, useEffect, useState } from "react"
import { api } from "../../../lib/axios"
import { PedidoContext } from "../../contexts/PedidoContext"
import { VisibleContext } from "../../contexts/VisibleContext"

interface CardProps{
   reset: boolean,
   setReset: Function
   id: string,
   itens?: any
}

type Itens = {
   id: number
   nome: boolean
   qntd: number
   pedido_fk: number
   status: boolean
   preco: number
   loja_fk: string
}[]


export const CardPedido = (props: CardProps) => {
   const [itens, setItens] = useState<Itens>()

   useEffect(() => {
      api.get(`itens?pedido=${props.id}`).then((response)=>{
         setItens(response.data)
      })
   },[]) 

   
   const { reset, setReset } = props
   const [selected,setSelected] = useState(false)

   const context = useContext(PedidoContext)
   const contextVisible = useContext(VisibleContext)
   const { inicioVisible } = contextVisible.visible

   const style = selected ? "bg-gray-150 flex flex-col gap-3 pl-7 py-3 border-l-8 border-red-600 border-y-2 border-y-gray-150" 
   : "flex flex-col gap-3 pl-7 py-3 border-y-2 border-y-gray-1500"

   useEffect(() => {
      inicioVisible === true ? setSelected(false) : ""
   }, [inicioVisible])

   useEffect(() => {
      setSelected(false)
   },[reset])

    return(
       <div className={style}
         onClick={()=> {             
            contextVisible.setVisible({inicioVisible: false, detalhesVisible: true, cardapioVisible: false, cadastroVisible: false})                   
            setReset(!reset)
            setTimeout(() => setSelected(true), 0);
            context.setPedido({numero: props.id, itens: itens})                                  
            }
         }
       >
          <p>#{props.id}</p>
          <h2>Confirme o pedido</h2>
       </div>
    )
}