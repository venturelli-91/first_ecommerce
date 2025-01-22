import React from "react";
import NavInput from "./NavInput";



function NavigationBar () {
    return (
        <div className="absolute flex top-0 place-items-center z-20
         bg-green-300 border rounded-lg h-20 w-full">
            <div className="text-emerald-800 pt-auto mx-16 text-2xl font-serif">
                Venturelli Store
            </div>

        <NavInput/>
        

        </div>
    )
}


export default NavigationBar;