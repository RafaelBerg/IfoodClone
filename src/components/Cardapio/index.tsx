import { CardItem } from "./CardItem"

export const Cardapio = () => {
    return(
        <div className="flex flex-col m-14 border shadow p-4 border-b-2 border-gray-300 w-screen overflow-y-scroll max-h-120">
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl">Quentinhas</h1>
                <button className="text-red-600 border border-red-600 font-semibold px-6 py-2 rounded-lg" >+ Adcionar um item</button>
            
            </div>
            <div className="flex justify-between mt-8 ml-2">
                  <p>Item</p>
                  <div className="flex gap-20 mr-6">
                    <p>Preço</p>
                    <p>Status</p>
                  </div>               
            </div>
            <CardItem />
            <CardItem />
        </div>
    )
}