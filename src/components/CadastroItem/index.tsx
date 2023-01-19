import { useContext } from "react"
import { VisibleContext } from "../contexts/VisibleContext"
import { Input } from "./Input"

export const CadastroItem = () => {
    const contextVisible = useContext(VisibleContext)

    return(
        <div className="flex justify-center items-center absolute w-full h-full bg-zinc-900 bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-2 bg-white p-12 h-4/6 flex-wrap">
                <Input nome="Nome" style="border-2 py-2 pr-60 pl-2 rounded-lg focus:border-red-600 focus:outline-none" />
                <Input nome="Preço" style="border-2 py-2 pr-10 pl-2 w-48 rounded-lg focus:border-red-600 focus:outline-none" />
                <Input nome="Imagem" style="h-8"type="file" id="img" accept="image/*" />
                <div className="mt-12 text-center ">
                    <button className="border mr-4 border-red-600 rounded-md px-4 py-2 text-red-600" 
                    onClick={()=>{
                        contextVisible.setVisible({inicioVisible: false, detalhesVisible: false, cardapioVisible: true, cadastroVisible: false})
                    }}>
                        Cancelar
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md border">
                        Confirmar
                    </button>
                </div>                
            </div>                    
        </div>
    )
}