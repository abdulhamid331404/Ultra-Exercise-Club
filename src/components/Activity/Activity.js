import React from 'react';
import './Activity.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = () => {
    const showToastMessage = () => {
        toast.success('Activity Completed', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className='activity-container'>
            <button onClick={showToastMessage} className='activity-btn'>
                <h4>Activity Completed</h4>
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Activity;