import { AddContext } from "../context"
import { useContext } from "react"

export default function AddOn ({item}) {

    const {monthlyPlan, handleAddOns, handleSelectedAddOns, handleCheckboxChange} = useContext(AddContext)
    return (
        <div className={`flex ${item.isChecked ? "border-purplishBlue" : "border-lightGray"} border justify-between items-center w-full px-4 py-3  text-sm rounded-lg`}>
            <div className="flex space-x-3 items-center">
                <input onClick={
                            (event) => {
                                handleAddOns(event)
                                handleSelectedAddOns(item, item.id)
                            }
                        } 
                        className="cursor-pointer" 
                        type="checkbox" 
                        name={item.name} 
                        id={item.id}
                        checked={item.isChecked}
                        onChange={handleCheckboxChange}
                        />
                <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-coolGray text-xs">{item.utility}</p>
                </div>
            </div>
            <p className="text-purplishBlue text-xs font-semibold">+${monthlyPlan ? item.monthlyCost : item.yearlyCost}/{monthlyPlan ? "mo" : "yr"}</p>
        </div>
    )
}