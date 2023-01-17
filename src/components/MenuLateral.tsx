interface MenuProps{
    setInicioVisible: Function
}

export const MenuLateral = (props: MenuProps) => {
    const {setInicioVisible } = props
    return(
        <div className="flex flex-col text-center">
            <ul className="bg-gray-350 w-22 text-white h-full-size">
                <li className="cursor-pointer flex flex-col items-center gap-1 
                bg-gray-select rounded-lg px-3 py-3 m-1" onClick={() => {
                    setInicioVisible(true)
                }}>
                    <img className="h-6 w-6" src="src\assets\inicio.png"/>                    
                    Inicio
                </li>
                <li className="cursor-pointer flex flex-col items-center gap-1 px-3 py-3 m-1
                hover:bg-gray-select hover:rounded-lg">
                    <img className="h-6 w-6" src="src\assets\cardapio.png"/>
                    Cardápio
                </li>
            </ul>
            <ul className="bg-gray-350 w-22 text-white">
                <li className="cursor-pointer flex flex-col items-center gap-1 px-3 py-3 m-1
                hover:bg-gray-select hover:rounded-lg">
                    <img className="h-6 w-6" src="src\assets\config.png"/>
                    Config.
                </li>
            </ul>
        </div>
    )
}