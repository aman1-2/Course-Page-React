import React from "react";
import './Loader.css';

const Loader = () =>{
    return(
        <div className='flex items-center flex-col space-y-2'>

            <div className="buffer"></div>
            <p className='text-lg font-semibold text-fuchsia-200'>Loading......</p>

        </div>
    );
}

export default Loader;