import { useContext, useEffect, useState } from "react"
import { PedidoContext } from "../../contexts/PedidoContext"
import { VisibleContext } from "../../contexts/VisibleContext"

interface CardProps{
   reset: boolean,
   setReset: Function
   numero: string,
   itens: any
   
}
export const CardPedido = (props: CardProps) => {
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
            context.setPedido({numero: props.numero, itens: props.itens})                                  
            }
         }
       >
          <p>#{props.numero}</p>
          <h2>Confirme o pedido</h2>
       </div>
    )
}