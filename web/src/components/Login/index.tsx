import { api } from "../../lib/axios"
import { useContext, useState } from "react"
import { Input } from "../CadastroItem/Input"
import { VisibleContext } from "../contexts/VisibleContext"
import { Button } from "./Button"
import { LojaContext } from "../contexts/LojaContext"

export const Login = () => {
    const contextLoja = useContext(LojaContext)
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
                <Input nome="Nome da loja" id="loja" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>
                {cadastro && <Input nome="E-mail" id="email" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>}
                <Input nome="Senha" id="senha" type="password" style="border-2 py-3 pr-60 pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>

                {!cadastro ? <>
                <Button texto="Avançar" fn={() => {
                    const loja = document.getElementById("loja") as HTMLInputElement
                    const senha = document.getElementById("senha") as HTMLInputElement
                    api.get(`loja?nome=${loja.value}`).then((response) =>{
                        const loja = response.data
                        contextLoja.setLoja(loja)
                        if(loja?.senha === senha.value){
                            contextVisible.setVisible({
                                inicioVisible: true, 
                                detalhesVisible: false, 
                                cardapioVisible: false, 
                                cadastroVisible: false,
                                configVisible: false,
                                loginVisible: false
                              })
                        }else{
                            alert("Loja não cadastrada ou os dados estão errados!")
                        }
                    })                   
                }}/>
                
                <p>Ainda não tem cadastro? <a className="text-lg underline text-red-500 cursor-pointer"
                    onClick={()=> setCadastro(true)}>
                    Cadastre a sua loja
                    </a>
                </p>
                </> :
                <>
                    <Button texto="Cadastrar" fn={() => {
                        const loja = document.getElementById("loja") as HTMLInputElement
                        const email = document.getElementById("email") as HTMLInputElement
                        const senha = document.getElementById("senha") as HTMLInputElement

                        api.get(`loja?nome=${loja.value}`).then((response) =>{
                            if(!response.data){
                                api.post("addLoja", {
                                    nome: loja.value,
                                    email: email.value,
                                    senha: senha.value
                                }).then(()=>{
                                    loja.value = ""
                                    email.value = ""
                                    senha.value = ""
                                })
                            }else{
                                alert("Loja já cadastrada!")
                            }
                        })         
                        setCadastro(false)}}/>
                        <p>Já tem cadastro? <a className="text-lg underline text-red-500 cursor-pointer"
                    onClick={()=> setCadastro(false)}>
                    Logar
                    </a></p>
                </>
                    }
            </div>
        </div>
    )
}