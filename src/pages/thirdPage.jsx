import { useContext } from "react"
import { AddContext } from "../context"
import AddOn from "../components/addOn"

export default function Third () {

    const {addOnContext} = useContext(AddContext)
    return (
        <section className="space-y-8 flex flex-col text-marineBlue">
            <article>
                <h1 className="font-bold text-2xl ">Pick Add-ons</h1>
                <p className="text-coolGray text-sm"> Add-ons help you enjoy your gaming experience.</p>
            </article>

            <article className=" space-y-3 flex flex-col">

                {addOnContext.map((item, index) => {
                    return (
                        <AddOn key={index} item={item} />
                    )
                })}

            </article>
        </section>
    )
}