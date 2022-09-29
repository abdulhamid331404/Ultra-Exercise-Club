import React, { useState } from 'react';
import Breaktime from '../Breaktime/Breaktime';
import './Addbreak.css'


const Addbreak = () => {
    const [value, setValue] = useState([])
    // console.log(value);
    return (
        <div >
            <h2 className='add-title'>Add Break</h2>
            <div className='break-time'>
                <div><button  onClick={(v)=>{
                    setValue(v.target.innerText)}}>10</button></div>
                <div><button onClick={(v)=>{
                    setValue(v.target.innerText)}}> 20</button></div>
                <div><button  onClick={(v)=>{
                    setValue(v.target.innerText)}}>30</button></div>
                <div><button  onClick={(v)=>{
                    setValue(v.target.innerText)}}>40</button></div>
                <div><button  onClick={(v)=>{
                    setValue(v.target.innerText)}}>50</button></div>
            </div>
            <Breaktime value={value}></Breaktime>
        </div>
    );
};


export default Addbreak;