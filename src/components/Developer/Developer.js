import React from 'react';
import img from '../../images/developer.jpg'
import './Developer.css'
const Developer = () => {
    return (
        <div>
            <div className='dev-info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='dev-location'>
                    <h3 className='dev-name'>Abdul Hamid</h3>
                    <p className='location'><small>Cox's Bazar, Bangladesh</small></p>
                </div>
            </div>
            <div className='dev-details'>
                <div><h5>75 kg <br />
                    Weight</h5></div>
                <div>
                    <h5>6.5 <br />  Height</h5>
                </div>
                <div>
                    <h5>25yrs <br />
                        Age</h5>
                </div>
            </div>

        </div>
    );
};

export default Developer;