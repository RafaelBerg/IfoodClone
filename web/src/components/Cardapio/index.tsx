import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { LojaContext } from "../contexts/LojaContext"
import { VisibleContext } from "../contexts/VisibleContext"
import { CardItem } from "./CardItem"

type Cardapio = {
    id: number
    status: boolean
    nome: string
    preco: number
}[]

export const Cardapio = () => {
    const contextLoja = useContext(LojaContext)
    const contextVisible = useContext(VisibleContext)
    const [cardapio, setCardapio] = useState<Cardapio>()
    const [edit, setEdit] = useState({status: "false", id: []})

    useEffect(() => {
        api.get(`cardapio?loja=${contextLoja.loja.nome}`).then((response)=>{
            setCardapio(response.data)
        })
    },[])

    return(
        <div className="flex flex-col m-14 border shadow p-4 border-b-2 border-gray-300 w-screen overflow-y-scroll max-h-120">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Menu</h1>
                {edit.status === "true" && <button className= "bg-red-600 text-white px-4 rounded-md border text-lg" onClick={() => {
                    setEdit({...edit, status: "edit"})                  
                }} >Salvar Modificações</button>}        
                <button className="text-red-600 border border-red-600 font-semibold px-6 py-2 rounded-lg hover:scale-95 ease-in-out duration-200" 
                onClick={()=> {
                    contextVisible.setVisible({inicioVisible: false, detalhesVisible: false, cardapioVisible: true, cadastroVisible: true})   
                }} >+ Adicionar um item</button>
            
            </div>
            <div className="flex justify-between mt-8 ml-2 font-bold">
                <p>Item</p>
                <div className="flex gap-20 mr-6">
                <p>Preço</p>
                <p>Status</p>
                </div>               
            </div>
            {cardapio?.map((item) => {
                
                return(
                    <CardItem key={item.id} id={item.id} nome={item.nome} preco={item.preco} status={item.status} edit={edit} setEdit={setEdit} />
                )
            })}
        </div>
    )
}