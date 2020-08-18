import React from 'react';
import plate from './assets/plate-fork-spoon.jpg';

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
               <h1> What do you want to 
                <br></br>
                eat?</h1>
                <img src={plate} alt="plate-fork-spoon" />
                <input id='field' type="text" placeholder="Enter here" />   
                <button>Submit</button>
            </div>
            )
    }
}

export default Main;