import { useContext } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"
import { VisibleContext } from "../contexts/VisibleContext"
import { Input } from "./Input"

export const CadastroItem = () => {
    const contextLoja = useContext(LojaContext)
    const contextVisible = useContext(VisibleContext)

    return(
        <div className="flex justify-center items-center absolute w-full h-full bg-zinc-900 bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">    
            <div className="flex flex-col gap-2 bg-white px-12 h-3/6 flex-wrap">
                <h2 className="pt-10 pb-2 text-center font-semibold text-gray-800 text-lg">Cadastrar</h2>
                <Input nome="Nome" id="nomeItem" style="border-2 py-2 pr-60 pl-2 rounded-lg focus:border-red-600 focus:outline-none" />
                <Input nome="Preço" id="precoItem" type="number" style="border-2 py-2 pr-10 pl-2 w-48 rounded-lg focus:border-red-600 focus:outline-none" />
                <div className="mt-12 text-center ">
                    <button className="border mr-4 border-red-600 rounded-md px-4 py-2 text-red-600 hover:scale-95 ease-in-out duration-200" 
                    onClick={()=>{                        
                        contextVisible.setVisible({inicioVisible: false, detalhesVisible: false, cardapioVisible: true, cadastroVisible: false})
                    }}>
                        Cancelar
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md border hover:scale-95 ease-in-out duration-200" onClick={()=>{
                        const nome = document.getElementById("nomeItem") as HTMLInputElement
                        const preco = document.getElementById("precoItem") as HTMLInputElement
                        if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(nome.value)) alert("Insira um nome válido!")
                        else if(preco.value.length === 0) alert("Insira um preço!")
                        else{
                            api.post("/addCardapio", {
                                nome: nome.value,
                                preco: parseFloat(preco.value),
                                loja: contextLoja.loja.nome
                            })
                            contextVisible.setVisible({inicioVisible: false, detalhesVisible: false, cardapioVisible: true, cadastroVisible: false})                        
                        }
                    }}>
                        Confirmar
                    </button>
                </div>                
            </div>                    
        </div>
    )
}