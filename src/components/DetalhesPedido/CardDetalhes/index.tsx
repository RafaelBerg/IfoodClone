

interface CardProps{
    prato: string,
    qntd?: string,
    valor: string
}

export const CardDetalhes = (props: CardProps) => {
    const {qntd, prato, valor} = props

    return(
        <div className="bg-gray-100 flex justify-between w-size p-4 border border-gray-300">
                <h2 className="font-semibold text-gray-600">    
                    <strong>{qntd}</strong> -  {prato}
                </h2>
                <p>R$ {valor}</p>            
        </div>
    )
}