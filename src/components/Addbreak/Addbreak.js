import React, { useState } from 'react';
import './Addbreak.css'


const Addbreak = () => {
    return (
        <div >
            <h2 className='add-title'>Add Break</h2>
            <div className='break-time'>
                <div><button>10m</button></div>
                <div><button onClick={(v)=>{
                    console.log(v.target.innerText)}}>20m</button></div>
                <div><button>30m</button></div>
                <div><button>40m</button></div>
                <div><button>50m</button></div>
            </div>
        </div>
    );
};

export default Addbreak;