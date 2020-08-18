import React from 'react';

function Food(props) {
    let food = ""
    console.log(props.filter);

    if (props.filter.length) {
        food = ( 
        <p>{ props.filter.strCategory}</p>
        )
            
    } console.log(food);
    return ( 
            <div>
              {food}
            </div>
      ) 

    }

    export default Food;