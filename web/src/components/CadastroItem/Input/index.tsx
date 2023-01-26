interface Input{
    nome: String,
    style?: string
    type?: string
    id?: string
    accept?: string
}

export const Input = (props : Input) => {
    return(
        <div className="flex flex-col">
            <label className="pl-1">{props.nome}</label>
            <input className={props.style} required type={props.type} id={props.id}  accept={props.accept}/>               
        </div>
    )
}