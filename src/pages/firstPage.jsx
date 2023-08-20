// import React from "react";
import { AddContext } from "../context";
import { useContext } from "react";

export default function First () {

    const {formData, handleFormChange, isFormSubmitted} = useContext(AddContext)

    return (
            <div className="h-full flex flex-col text-marineBlue space-y-8 ">
                <div>
                    <h1 className="font-bold text-2xl ">Personal info</h1>
                    <p className="text-coolGray text-sm">Please provide your name, email address, and phone number</p>
                </div>

                <div className="space-y-4 font-semibold">

                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between">
                            <label htmlFor="name" className="text-marineBlue ">Name</label>
                            {!formData.name && isFormSubmitted ? <p className="text-strawberryRed text-xs">This field is required</p>
                            : ""}
                        </div>
                        <input 
                            type="text" required 
                            name="name" id="name" 
                            placeholder="e.g Andrew Ellingen" 
                            className={`border ${!formData.name && isFormSubmitted ? "border-strawberryRed": ""} text-sm rounded-md h-10 px-3`}
                            value={formData.name} 
                            onChange={
                                (event) => handleFormChange(event)
                            } />
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between">
                            <label htmlFor="email" className="text-marineBlue ">Email Address</label>
                            {!formData.email && isFormSubmitted ? <p className="text-strawberryRed text-xs">This field is required</p>
                            : ""}
                        </div>
                        <input 
                            type="email" required 
                            name="email" id="email" 
                            placeholder="andrewellingen@gmail.com" 
                            className={`border ${!formData.email && isFormSubmitted ? "border-strawberryRed": ""} text-sm rounded-md h-10 px-3`}
                            value={formData.email}
                            onChange={
                                (event) => handleFormChange(event)
                            } />
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between">
                            <label htmlFor="number" className="text-marineBlue ">Phone Number</label>
                            {!formData.number && isFormSubmitted ? <p className="text-strawberryRed text-xs">This field is required</p>
                            : ""}
                        </div>
                        <input 
                            type="number" required 
                            name="number" id="number" 
                            className={`border ${!formData.number && isFormSubmitted ? "border-strawberryRed": ""} text-sm rounded-md h-10 px-3`}
                            value={formData.number} 
                            placeholder="+1 234 567 890"
                            onChange={
                                (event) => handleFormChange(event)
                            } />
                    </div>
                </div>
            </div>
    )
}