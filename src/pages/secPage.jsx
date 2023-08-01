import { useContext } from "react"
import Plan from "../components/plan"
import { AddContext } from "../context"

export default function Second () {
    const {plans, monthlyPlan, choosePlan} = useContext(AddContext)
    return (
            <section className="h-full flex flex-col text-marineBlue space-y-4 md:space-y-8 ">
                <article>
                    <h1 className="font-bold text-2xl ">Select your plan</h1>
                    <p className="text-coolGray text-sm"> You have option of monthly or yearly billing.</p>
                </article>

                <article className="md:space-x-4 space-y-3 md:space-y-0 flex flex-col md:flex-row">
                    {plans.map((item, index) => {
                        return (
                            <Plan item={item} key={index} />
                        )
                    })}
                </article>

                <div className="bg-alabaster rounded-lg py-3 flex justify-center gap-x-4 text-sm tracking-widest font-semibold">
                    <p className={ `${monthlyPlan ? "" : "text-coolGray"} `}>Monthly</p>
                    <div onClick={choosePlan} className={`bg-marineBlue w-8 rounded-xl flex ${ monthlyPlan ? "justify-start" : "justify-end"} p-1 cursor-pointer`}>
                        <div className="bg-alabaster w-1/2 h-full rounded-full">

                        </div>
                    </div>
                    <p className={ `${monthlyPlan ? "text-coolGray" : ""} `}>Yearly</p>
                </div>
            </section>
    )
}