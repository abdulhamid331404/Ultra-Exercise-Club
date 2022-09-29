import React from 'react';
import './Activity.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = () => {
    const showToastMessage = () => {
        toast('Success Notification !');
    };
    return (
        <div className='activity-container'>
            <button onClick={showToastMessage} className='activity-btn'>
                <h4>Activity Completed</h4>
            </button>
        </div>
    );
};

export default Activity;