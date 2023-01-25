import { useContext } from "react"
import { LojaContext } from "../contexts/LojaContext"

export const Header = () => {
    const contextLoja = useContext(LojaContext)
    return(
        <div className="flex justify-between items-center shadow-lg h-16">
            <div className="flex gap-4 ml-6 items-center">
                <img className="w-8 h-8" src="src\assets\icon.png"/>
                <h3 className="text-lg font-semibold">
                    {contextLoja.loja.nome}
                </h3>
            </div>          
            <div className="flex items-center gap-6">
                <button className="text-xl font-bold underline text-red-500">
                    Fechar Agora
                </button>
                <div className="flex gap-2 pr-10 pl-4 items-center border-solid border-l-2 border-gray-300 border-b-4 border-b-green-500 h-16">
                    <img className="w-5 h-5" src="src\assets\open.png"/>
                    <div className="leading-5">
                        <h4 className="text-green-500 font-bold">
                            Loja Aberta
                        </h4>
                        <p className="text-sm text-gray-400 font-bold">
                            Dentro do horário programado
                        </p>
                    </div>                 
                </div>
            </div>            
        </div>
    )
}