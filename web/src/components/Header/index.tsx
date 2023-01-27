import { useContext, useEffect, useState } from "react"
import { LojaContext } from "../contexts/LojaContext"

export const Header = () => {
    const contextLoja = useContext(LojaContext)   
    const [status, setStatus] = useState(contextLoja.loja.status)

    useEffect(()=>{
        const date = new Date()
        const date_inicio = new Date(contextLoja.loja.horario_inicio)
        const date_fim = new Date(contextLoja.loja.horario_fim)
        date_inicio.setHours(date_inicio.getHours()+3)
        date_fim.setHours(date_fim.getHours()+3)
        if(date.getTime() > date_inicio.getTime()  && date.getTime() < date_fim.getTime()){
            setStatus(true)
        }else{
            
        }
    },[contextLoja])
    
  
    var configs = {
    texto: "Fechar Agora", 
    texto2: "Aberta", 
    style: "text-red-500",
    style2: "text-green-500",
    border: "border-b-green-500" ,
    img: "open.png"}

    if(!status){
        configs.texto = "Abrir Agora"
        configs.texto2 = "Fechada",
        configs.style = "text-green-500", 
        configs.style2 = "text-red-500", 
        configs.border = "border-b-red-500",
        configs.img = "close.png"
    }

    return(
         <div className="flex justify-between items-center shadow-lg h-16">
            <div className="flex gap-4 ml-6 items-center">
                <img className="w-8 h-8" src="src\assets\icon.png"/>
                <h3 className="text-lg font-semibold">
                    {contextLoja.loja.nome}
                </h3>
            </div>          
            <div className="flex items-center gap-6">
                <button onClick={()=>{
                    setStatus(!status)
                }} className={`text-xl font-bold underline ${configs.style}`}>
                    {configs.texto}
                </button>
                
                <div className={`flex gap-2 pr-10 pl-4 items-center border-solid border-l-2 border-gray-300 border-b-4 ${configs.border} h-16`}>
                    <img className="w-5 h-5" src={`src\/assets\/${configs.img}`}/>
                    <div className="leading-5">
                        <h4 className={`font-bold ${configs.style2}`}>
                            Loja {configs.texto2}
                        </h4>
                        <p className="text-sm text-gray-400 font-bold">
                            Status da loja no aplicativo
                        </p>
                    </div>                 
                </div>
            </div>           
        </div>
    )
}