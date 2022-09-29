import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Addbreak from '../Addbreak/Addbreak';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import Exercisedetails from '../Exercisedetails/Exercisedetails';
import './Main.css'

const Main = () => {

    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('exercisedata.json')
            .then(res => res.json())
            .then(data => {
                setCarts(data)
            })
    }, []);


    const handleAddToTime = (cart) => {
        // console.log(cart);
        const newTime = [...time, cart]
        setTime(newTime);
    };
    return (
        <div className='main-container'>
            <div className='exercise-container'>


                {carts.map(cart => <Cart key={cart.id}
                    cart={cart}
                    handleAddToTime={handleAddToTime}
                ></Cart>)}
            </div>
            <div className='details-container'>
                <Developer></Developer>
                <Addbreak></Addbreak>
                <Exercisedetails
                    time={time}
                ></Exercisedetails>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Main;