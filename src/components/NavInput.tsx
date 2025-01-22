import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function NavInput () {
    return(

        <div>

            <input className=" bg-slate-100 rounded-full w-1/4 h-10 text-justify right-5 absolute 
            bottom-1/4 font-normal text-md pr-10 pl-5 mr-40 border-none font-serif" 
            type="text" 
            placeholder=" Search here..."/>   

            <FaSistrix className="right-10 mr-40 rounded-full absolute transform -translate-y-1/2 top-1/2 size-6"/>
            
            <FaShoppingCart className="right-20 rounded-full absolute transform -translate-y-1/2 top-1/2 size-6" />
            
            <FaUserAlt className="rounded-full absolute transform -translate-y-1/2 top-1/2 size-6 right-10" />

        </div>
    )



}

export default NavInput;