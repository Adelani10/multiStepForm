import React from "react";
import { useState} from "react";

const AddContext = React.createContext()



function Context (props) {

    const [plans, setPlans] = useState([
        {
            id: 1,
            name: "Arcade",
            isSelected: false,
            img: "/icon-arcade.svg",
            monthlyCost: 9,
            yearlyCost: 90,
            discount: "2 months free",
        },
        {
            id: 2,
            name: "Advanced",
            isSelected: false,
            img: "/icon-advanced.svg",
            monthlyCost: 12,
            yearlyCost: 120,
            discount: "2 months free",
        },
        {
            id: 3,
            name: "Pro",
            isSelected: false,
            img: "/icon-pro.svg",
            monthlyCost: 15,
            yearlyCost: 150,
            discount: "2 months free",
        },
    ])
    const [addOnContext, setAddOnContext] = useState([
        {
            id: "1",
            name: "Online service",
            utility: "Access to multiplayer games",
            monthlyCost: 1,
            yearlyCost: 10,
            isChecked: false
        },
        {
            id: "2",
            name: "Larger storage",
            utility: "Extra 1TB of cloud save",
            monthlyCost: 2,
            yearlyCost: 20,
            isChecked: false
        },
        {
            id: "3",
            name: "Customizable profile",
            utility: "Custom theme on your profile",
            monthlyCost: 2,
            yearlyCost: 20,
            isChecked: false
        },
    ])
    const [selectedPlan, setSelectedPlan] = useState({monthlyCost: 0, yearlyCost: 0})
    const [monthlyPlan, setMonthlyPLan] = useState(true)
    const [selectedAddOns, setSelectedAddOns] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: ""
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    function handleSubmit() {
            setIsFormSubmitted(true)
    }

    function handlePlanChange (id) {
        const newPlans = plans.map((item) => {
            if (item.id === id){
                return {
                    ...item, isSelected: true
                }
            }
            else if (item.id !== id) {
                return {
                    ...item, isSelected: false
                }
            }
            return item
        })
        setPlans(newPlans)
    }

    // function handleAddOns (id) {
    //     const newPlans = addOnContext.map((item) => {
    //         if (item.id === id){
    //             return {
    //                 ...item, isChecked: !item.isChecked
    //             }
    //         }
    //         return item
    //     })
    //     setAddOnContext(newPlans)
    // }

    // const handleChange = () => {
    //     console.log("Okay")
    // }

    async function handleAddOns (event) {

        const {checked} = event.target

        const newAddOns = await addOnContext.map((item) => {

            if (event.target.id == item.id){
                return {
                    ...item, isChecked: checked
                }
            }
            return item
        })
        setAddOnContext(newAddOns)
    }

    function handleSelectedPlan (newItem) {
        if (!newItem.isSelected){
            setSelectedPlan(newItem)
        }
    }

    function handleSelectedAddOns (newItem, id) {
        if (!newItem.isChecked){
            setSelectedAddOns(prev => {
                return [...prev, newItem]
             })
        }
        else if (newItem.isChecked){
            setSelectedAddOns(prev => prev.filter(item => item.id !== id))
        }
    }

    const handleCheckboxChange = () => {
        console.log("changed")
    }

    function reset () {
        setFormData({
            name: "",
            email: "",
            number: ""
        })
        setIsFormSubmitted(false)
        setSelectedAddOns([])
        setSelectedPlan({monthlyCost: 0, yearlyCost: 0})
    }

    const total = selectedAddOns.reduce((acc, cur) => {
        return acc + (monthlyPlan ? cur.monthlyCost : cur.yearlyCost)
    }, 0) + (monthlyPlan ? selectedPlan.monthlyCost : selectedPlan.yearlyCost)



    function handleFormChange (event) {
        const {type, value, name, checked } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function choosePlan () {
        setMonthlyPLan(!monthlyPlan)
    }

    
    return (
        <AddContext.Provider value={{
                plans, 
                handlePlanChange,
                monthlyPlan,
                choosePlan,
                addOnContext,
                handleAddOns,
                selectedPlan,
                handleSelectedPlan,
                handleSelectedAddOns, 
                selectedAddOns,
                handleCheckboxChange,
                total,
                location,
                formData,
                handleFormChange,
                isFormSubmitted,
                handleSubmit,
                reset
            }}>
                {props.children}
        </AddContext.Provider>
    )
        
}

export {Context, AddContext}