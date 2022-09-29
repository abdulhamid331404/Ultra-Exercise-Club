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
            <div className='exercise-time'>
                <h4 className='ex-time'>Exercise time</h4>
                <p placeholder={0}>{totalTime}  minute</p>
            </div>
            
        </div>
    );
};


export default Exercisedetails;