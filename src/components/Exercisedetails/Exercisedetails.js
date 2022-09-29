import React from 'react';
import './Exercisedetails.css'

const Exercisedetails = ({time}) => {

    // console.log(time);
        let totalTime = 0;
    for (const second of time){
        // console.log(second);
        const getTime = parseInt(second.time);
        totalTime = totalTime + getTime;
    }
    return (
        <div className='Exercisedetails'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h4 className='ex-time'>Exercise time</h4>
                <p>{totalTime} minute</p>
            </div>
            <div className='Break-time'>
                    <h4>Break time</h4>
                    <p>0 minute</p>
            </div>
        </div>
    );
};


export default Exercisedetails;