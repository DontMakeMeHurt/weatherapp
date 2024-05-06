import React from 'react'
import './Weather.css'
import { BsSearch } from "react-icons/bs";


const Weather = () => {
    return (
        <div>
            <div className="container">
                <div className="city">
                    <input type="text" placeholder='Enter the name of city...' />
                    <button>
                        <BsSearch></BsSearch>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Weather