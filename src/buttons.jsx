import { AddContext } from "./context"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Buttons () {
    const location = useLocation();
    const {handleSubmit, formData, reset} = useContext(AddContext)

    return (
        <footer className={`flex ${location.pathname === "/" ? "justify-end" : "justify-between"} items-center ${location.pathname === "/lastStep" ? "hidden" : "inline-block"} w-full py-4 px-[7.5%] md:px-0 mx-auto bg-white md:bg-transparent`}>
            {location.pathname !== "/" && <Link 
                to={location.pathname === "/secondStep" ? "/" : location.pathname === "/thirdStep" ? "/secondStep" : location.pathname === "/fourthStep" ? "/thirdStep" : ""} 
                className="font-semibold text-coolGray">
                Go back
            </Link>}

            {location.pathname === "/fourthStep" 
            ?
            <button type="submit" onClick={reset}>
                <Link to="/lastStep" className="bg-marineBlue text-lightGray font-semibold px-3 py-2 rounded-md">
                    Confirm
                </Link>
            </button>
            :
            <button className="" onClick={handleSubmit}>
                <Link to={location.pathname === "/" && formData.name && formData.email && formData.number ? "/secondStep" : location.pathname === "/secondStep" ? "/thirdStep" : location.pathname === "/thirdStep" ? "/fourthStep" : location.pathname === "/fourthStep" ? "/lastStep" : ""} className="bg-marineBlue text-lightGray font-semibold px-3 py-2 rounded-md">
                    Next Step
                </Link>
            </button>
            }
        </footer>
    )
}