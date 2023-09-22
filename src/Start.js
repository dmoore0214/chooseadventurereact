import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Start(){
    const [name, setName] =useState('');
    
    return (
        <div className="start">
        <div className='welcome'>
            <h1>Welcome Adventurer!</h1>
        <p>Welcome to the Adventure! First things first... </p>
        <label>What is your name?</label>
        <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </div>
        <div className="nextPage">
            <p>
                Welcome {name}! You have all the power here! I hope you make it
                to the end!  If you would like to continue the journey press the
                button below!
            </p>
            <ButtonLink to="/continue">Continue</ButtonLink>
        </div>
        </div>
    )
}

function ButtonLink({ to , children}){
    return <Link to={to}><button>{children}</button></Link>
  }
export default Start;