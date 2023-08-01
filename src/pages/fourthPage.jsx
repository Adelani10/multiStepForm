import { Link } from "react-router-dom";
import { AddContext } from "../context";
import { useContext } from "react";


export default function Fourth () {

    const {selectedAddOns, selectedPlan, monthlyPlan, total} = useContext(AddContext)
    return (
        <section className="h-full flex flex-col text-marineBlue space-y-4 md:space-y-8 ">
            <article>
                <h1 className="font-bold text-2xl ">Finishing up</h1>
                <p className="text-coolGray text-sm"> Double-check everything looks ok before confirming </p>
            </article>

            <article className=" space-y-3 py-6 px-5 rounded-lg bg-alabaster flex flex-col text-sky-800 text-xs">
                <div className="border-b flex justify-between items-center pb-3">
                    <div>
                        <h4 className="font-bold">{selectedPlan.name} {monthlyPlan ? "(Monthly)" : "(Yearly)"}</h4>
                        <Link to="/secondStep" className="underline" >Change</Link>
                    </div>
                    <p className="text-xs font-semibold">${monthlyPlan ? selectedPlan.monthlyCost : selectedPlan.yearlyCost}/{monthlyPlan ? "mo" : "yr"}</p>
                </div>

                {selectedAddOns.map((item, index) => {
                    return (
                        <div key={index} className=" flex justify-between items-center">
                            <h4 className="font-bold text-coolGray">{item.name}</h4>
                            <p className=" text-xs font-semibold">${monthlyPlan ? item.monthlyCost : item.yearlyCost}/{monthlyPlan ? "mo" : "yr"}</p>
                        </div>
                    )
                })}
                
            </article>

            <div className=" flex justify-between items-center px-4">
                <h4 className="font-bold text-coolGray text-xs">Total ({monthlyPlan ? "per month" : "per year"})</h4>
                <p className="text-purple-600 font-semibold">${total}/{monthlyPlan ? "mo" : "yr"}</p>
            </div>
        </section>
    )
}