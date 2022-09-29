import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div>
            <div className='single-quextion'>
                <h1>How does <strong>React</strong> work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='single-quextion'>
                <h1 style={{textAlign:'center'}}>State   <strong>VS</strong> Props</h1>
               <div className='state-props'>
               <div className='state'>
                <h2>State</h2>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                </div>
                <div className='state'>
                    <h2>Props</h2>
                    <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                </div>
               </div>
            </div>
            <div className='single-quextion'>
                <h1>What can be done without data load in useEffect?</h1>
                <p> we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak!</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;