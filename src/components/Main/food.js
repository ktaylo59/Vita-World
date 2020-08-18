import React from 'react';

function Food(props) {
    let food = ""
    console.log(props.filter);

    if (props.filter.length) {
        food = ( 
            <div>
            <h1>{props.filter[0].strCategory}</h1>
        <p> {props.filter[0].strCategoryDescription} </p>
            <img src={props.filter[0].strCategoryThumb} alt="beef" />
        </div>
        )
            
    } console.log(food);
    return ( 
            <div>
              {food}
            </div>
      ) 

    }

    export default Food;