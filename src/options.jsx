// import React from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { AddContext } from "./context"

export default function Options () {

    const {formData, handleSubmit} = useContext(AddContext)
    const location = useLocation()

    return (
        <aside className="md:w-2/5 w-full md:bg-desktop bg-mobile rounded-b-xl md:rounded-xl flex md:flex-col bg-no-repeat bg-cover md:space-y-8 justify-center md:justify-start h-1/3 md:h-full space-x-6 md:space-x-0 md:p-8 pt-8">

            <Link to="/" className="flex space-x-3 text-white tracking-widest">
                <h4 className="w-8 h-8 rounded-full flex justify-center items-center border">1</h4>
                <div className="uppercase hidden flex-col items-start md:flex text-[10px]">
                    <h4 className="text-lightGray">step 1</h4>
                    <h4 className="font-bold">your info</h4>
                </div>
            </Link>



            <Link onClick={handleSubmit} to={location.pathname === "/" && formData.name && formData.email && formData.number ? "/secondStep" : "/"} className="flex text-white tracking-widest space-x-3">
                <h4 className="w-8 h-8 rounded-full text-white  flex justify-center items-center border">2</h4>
                <div className="uppercase hidden md:flex flex-col items-start text-[10px]">
                    <h4 className="text-lightGray">step 2</h4>
                    <h4 className="font-bold">select plan</h4>
                </div>
            </Link>

            <Link onClick={handleSubmit} to={location.pathname === "/" && formData.name && formData.email && formData.number ? "/thirdStep" : "/"} className="flex text-white tracking-widest space-x-3">
                <h4 className="w-8 h-8 rounded-full flex text-white  justify-center items-center border">3</h4>
                <div className="uppercase hidden md:flex flex-col items-start text-[10px]">
                    <h4 className="text-lightGray">step 3</h4>
                    <h4 className="font-bold">add ons</h4>
                </div>
            </Link>


            <Link onClick={handleSubmit} to={location.pathname === "/" && formData.name && formData.email && formData.number ? "/fourthStep" : "/"} className="flex text-white tracking-widest space-x-3">
                <h4 className="w-8 h-8 rounded-full flex text-white justify-center items-center border">4</h4>
                <div className="uppercase hidden md:flex flex-col items-start text-[10px]">
                    <h4 className="text-lightGray">step 4</h4>
                    <h4 className="font-bold">summary</h4>
                </div>
            </Link>
        </aside>
    )
}