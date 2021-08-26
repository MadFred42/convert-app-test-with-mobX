import React from 'react';
import { Link } from 'react-router-dom';

export const Buttons = () => {

    return (
        <div className='d-flex justify-content-center' >
            <Link to='/'>
                <button className='btn btn-outline-primary'>Converter</button>
            </Link>   
            <Link to='/currency'>
                <button className='btn btn-outline-primary'>Exchange rates</button>
            </Link>
        </div>
    )
}

