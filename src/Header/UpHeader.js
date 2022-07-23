import React from 'react';
import './UpHeader.css'
import { BsFillPersonFill } from "react-icons/bs";
const UpHeader = () => {
    return (
            <div className='bg  d-flex justify-content-around align-items-center'>
            <div className=' me-5 d-flex justify-content-evenly align-items-center ' >
                <p ><BsFillPersonFill /> MY CLUB SERRANO</p>
                <p className='ms-4'> TRAVAGO CASINO RESORT</p>
                <p className='ms-4'> TRAVAGO PLACE </p>
            </div>
            <div>
                <p>CAREERS</p>
            </div>
        </div>
    );
};

export default UpHeader;