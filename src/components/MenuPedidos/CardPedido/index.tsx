import { useContext, useEffect, useState } from "react"
import { PedidoContext } from "../../contexts/PedidoContext"

interface CardProps{
   inicioVisible: boolean,
   setInicioVisible: Function
   reset: boolean,
   setReset: Function
   numero: string,
   itens: any
}


export const CardPedido = (props: CardProps) => {
   const {inicioVisible, setInicioVisible, reset, setReset} = props
   const [selected,setSelected] = useState(false)
   const context = useContext(PedidoContext)
   
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
            setInicioVisible(false)   
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