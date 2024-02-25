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
            <form onClick={(e)=>{e.preventDefault()}} className="flex flex-col justify-center w-screen align-middle m-24 gap-2">               
                <div className="mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">Portal do Parceiro</h2>
                    <p>Gerencie sua loja  de forma fácil e rápida</p>
                </div>                        
                <Input  nome="Nome da loja" id="loja" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>
                {cadastro && <Input nome="E-mail" id="email" style="border-2 py-3  pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>}
                <Input nome="Senha" id="senha" type="password" style="border-2 py-3 w-110 pl-2 rounded-lg focus:border-red-600 focus:outline-none"/>                 
                {!cadastro ? <>
                    <Button texto="Avançar" fn={() => {
                        const loja = document.getElementById("loja") as HTMLInputElement
                        const senha = document.getElementById("senha") as HTMLInputElement

                        if(loja.value.length === 0 || senha.value.length === 0) alert("Preencha os campos")
                        else{
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
                                }else alert("Loja não cadastrada ou os dados estão errados!")                          
                            })                   
                        }
                    }}/>
                    
                    <p>Ainda não tem cadastro? <a className="text-lg underline text-red-500 cursor-pointer hover:text-green-500"
                        onClick={()=> setCadastro(true)}>
                        Cadastre a sua loja
                        </a>
                    </p>
                </> 
                :                
                    <>
                        {<div className="flex flex-col justify-center items-center">
                            <p>Horario que a loja ficará aberta</p>
                            <div>
                                <input id="timeInicio" type="time"/><span className="px-3">Até</span>
                                <input id="timeFim" type="time"/>
                            </div>
                            
                        </div>}  
                        <Button texto="Cadastrar" fn={() => {
                            const loja = document.getElementById("loja") as HTMLInputElement
                            const email = document.getElementById("email") as HTMLInputElement
                            const senha = document.getElementById("senha") as HTMLInputElement

                            const timeInicio = document.getElementById("timeInicio") as HTMLInputElement
                            const timeFim = document.getElementById("timeFim") as HTMLInputElement

                            api.get(`loja?nome=${loja.value}`).then((response) =>{
                                if(!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(loja.value)) alert("Insira um nome válido!")
                                else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) alert("Insira um email válido!")
                                else if(senha.value.length < 5) alert("A senha precisa ser maior ou igual a 5!")
                                else if(timeInicio.value.length == 0 || timeFim.value.length == 0) alert("Defina os horários que a loja ficará aberta!")
                                else if(timeInicio.value.slice(0,2) === timeFim.value.slice(0,2)) alert("A loja precisa ficar aberta por no mínimo uma hora!")
                                
                                else{
                                    if(!response.data){
                                        api.post("loja", {
                                            nome: loja.value,
                                            email: email.value,
                                            senha: senha.value,
                                            status: false,
                                            horario_inicio: timeInicio.value,
                                            horario_fim: timeFim.value
                                        }).then(()=>{
                                            loja.focus()
                                            setCadastro(false)
                                            loja.value = ""
                                            email.value = ""
                                            senha.value = ""
                                        })
                                    }else{
                                        alert("Loja já cadastrada!")
                                    } 
                                }                                
                            })         
                            }}/>
                            <p>Já tem cadastro? <a className="text-lg underline text-red-500 cursor-pointer hover:text-green-500"
                        onClick={()=> setCadastro(false)}>
                        Fazer login
                        </a></p>
                </>
                    }
            </form>
        </div>
    )
}