import React from "react";
import NavInput from "./NavInput";



function NavigationBar () {
    return (
        <div className="flex absolute top-0 place-items-center z-20
         bg-green-300 border rounded-lg h-20 w-full">
            <div className="text-green-700 pt-auto mx-16 text-2xl font-extrabold">
                Venturelli Store
            </div>

        <NavInput/>
        

        </div>
    )
}


export default NavigationBar;