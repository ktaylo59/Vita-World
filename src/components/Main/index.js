import React from 'react';


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
               <h1> What do you want to 
                <br></br>
                eat?</h1>
                  
                    <input id='field' type="text" placeholder="Enter here" />   
                <button>Submit</button>
            </div>
            )
    }
}

export default Main;