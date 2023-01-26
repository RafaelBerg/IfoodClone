import { useState } from "react";

type Edit = {
    id: Array<number>
    status: string
}

interface SwitchButtonProps{
    id: number
    status: boolean
    setStatus: Function
    edit: Edit
    setEdit: Function
}

export default function SwitchButton(props: SwitchButtonProps) {
    const [enabled, setEnabled] = useState(props.status);

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex ">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                            const arrayId = props.edit.id
                            arrayId.push(props.id)
                            props.setEdit({id: [...new Set(arrayId)], status: "true"})
                            props.setStatus(!props.status)
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                </label>
            </div>
        </div>
    );
}