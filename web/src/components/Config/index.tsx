import { useContext } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"
import { VisibleContext } from "../contexts/VisibleContext"

export const Config = () => {
    const contextLoja = useContext(LojaContext)
    const contextVisible = useContext(VisibleContext)
    return(
        <div className="flex items-center justify-center w-full gap-4"> 
            <button className=" bg-red-600 text-white px-4 py-2 rounded-lg border" onClick={()=> {
                contextVisible.setVisible({inicioVisible: true, 
                    detalhesVisible: false, 
                    cardapioVisible: false, 
                    cadastroVisible: false,
                    configVisible: false,
                    loginVisible: true
                  })
            }}>Sair da conta</button>          
            <button className=" bg-red-600 text-white px-4 py-2 rounded-lg border" onClick={() => {
                contextVisible.setVisible({inicioVisible: true, 
                    detalhesVisible: false, 
                    cardapioVisible: false, 
                    cadastroVisible: false,
                    configVisible: false,
                    loginVisible: true
                  })
                api.post("delLoja", {
                    nome: contextLoja.loja.nome 
                })
            }}>Apagar Conta</button>          
        </div>
    )
}