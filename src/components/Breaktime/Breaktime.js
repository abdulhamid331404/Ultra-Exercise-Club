import React from 'react';

import './Breaktime.css'

const Breaktime = ({value}) => {
    console.log(value);
    return (
        <div>
               <h2>Exercise Details</h2>
            <div className='Break-time'>
                    <h4>Break time</h4>
                    <p>{value} minute</p>
            </div>
        </div>
    );
};

export default Breaktime;