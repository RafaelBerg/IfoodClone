import { useEffect, useState } from "react"
import { api } from "../../../lib/axios"
import SwitchButton from "./SwitchButton/SwitchButton"

type Edit = {
    id: Array<number>
    status: string
}

interface CardItemProps{
    id: number
    nome: string
    preco: number
    status: boolean
    edit: Edit
    setEdit: Function
}

export const CardItem = (props: CardItemProps) => {
    const [value, setValue] = useState(props.preco.toFixed(2))
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        if(props.edit.status === "edit" && props.edit.id[0] === props.id){
            setTimeout(() => {
                api.post("/updCardapio", {
                    id: props.id,
                    preco: parseFloat(value),
                    status: status
                }) 
                let arr = props.edit.id.filter(item => item !== props.id)   
                props.setEdit({...props.edit, id: arr}) 
            }, 50)
        }
    },[props.edit])
    
    return(
        <>
            <div className="flex justify-between mt-4 border-t-2 pt-4 items-center gap-14">
                <div className="flex items-center gap-4 ml-2">
                    <p>{props.nome}</p>
                </div>
                <div className="flex gap-10">
                    <input value={value} className="h-10 w-28 p-2 border border-gray-400 rounded-md placeholder:text-black" type="number" 
                    onChange={(e) => {
                        setValue(e.target.value)                       
                        const arrayId = props.edit.id
                        arrayId.push(props.id)
                        props.setEdit({id: [...new Set(arrayId)], status: "true"})
                    }}/>
                    <SwitchButton id={props.id} edit={props.edit} setEdit={props.setEdit} status={status} setStatus={setStatus}/>
                </div>
            </div>
        </>
    )
}