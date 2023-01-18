import SwitchButton from "./SwitchButton/SwitchButton"

export const CardItem = () => {
    return(
        <>
            <div className="flex justify-between mt-4 border-t-2 pt-4 items-center gap-14">
                <div className="flex items-center gap-4">
                    <img className="w-16 h-16 rounded-lg" src="src\assets\item1.jfif"></img>
                    <p>Costelinha Suína ao molho barbecue</p>
                </div>
                <div className="flex gap-10">
                    <input className="h-10 w-28 p-2 border border-gray-400 rounded-md placeholder:text-black" type="text" placeholder="R$ 32.90"/>
                    <SwitchButton />
                </div>
            </div>
        </>
    )
}