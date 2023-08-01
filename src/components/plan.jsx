import { useContext } from "react"
import { AddContext } from "../context"

export default function Plan ({item}) {

    const {handlePlanChange, handleSelectedPlan, monthlyPlan} = useContext(AddContext)

    return (
        <button 
            className={`flex border ${item.isSelected ? "border-purplishBlue" : "border-lightGray"} md:justify-between md:w-1/3 md:space-y-6 md:flex-col w-full px-2 md:p-3 py-4 space-x-3 md:space-x-0 items-start rounded-lg`}
            onClick={
                () => {
                    handlePlanChange(item.id)
                    handleSelectedPlan(item)
                }
            }>
            <img src={item.img} className="h-8 self-start" alt="" />
            <div className="flex text-sm flex-col items-start">

                <h4 className="font-bold">{item.name}</h4>

                <p className="text-coolGray text-xs">
                    ${monthlyPlan ? item.monthlyCost : item.yearlyCost}/{monthlyPlan ? "mo" : "yr"}
                </p>

                {!monthlyPlan && <p className="font-semibold text-xs">2 months free</p>}
            </div>
        </button>
    )
}