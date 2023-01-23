import { useContext, useState } from "react"
import { Input } from "./components/CadastroItem/Input"
import { VisibleContext } from "./components/contexts/VisibleContext"
import "./styles/global.css"
export const Login = () => {
    const contextVisible = useContext(VisibleContext)
    const [cadastro, setCadastro] = useState(false)

    return(
        <div className="flex">
            <img className="h-screen w-full" src="src\assets\capa.jpg"/>
            <div className="flex flex-col justify-center w-screen align-middle m-24 gap-2">               
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Portal do Parceiro</h2>
                    <p>Gerencie sua loja  de forma fácil e rápida</p>
                </div>
                {cadastro && <Input nome="Nome da loja" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>}
                <Input nome="E-mail" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>
                <Input nome="Senha" type="password" style="border-2 py-3 pr-60 pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>
                <button className="bg-red-600 mt-6 text-white px-4 py-3 rounded-md border" 
                onClick={()=> {
                    cadastro ? setCadastro(false) : contextVisible.setVisible({
                        inicioVisible: true, 
                        detalhesVisible: false, 
                        cardapioVisible: false, 
                        cadastroVisible: false,
                        configVisible: false,
                        loginVisible: false
                      })
                }}>
                        Avançar
                </button>

                {!cadastro && <p>Ainda não tem cadastro? <a className="text-lg underline text-red-500 cursor-pointer"
                    onClick={()=> setCadastro(true)}>
                    Cadastre a sua loja
                    </a>
                </p>}
            </div>
        </div>
    )
}