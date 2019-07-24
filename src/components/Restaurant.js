import React, { Component } from 'react'
import RestaurantList from '../RestaurantList.json';

export default class Restaurant extends Component {
    // constructor(props){
    //     super(props)
    // }

   

    render() {
        // var Data = require('json!../restaurants.json');
        return (
            <div>
                <h1>Restaurant page!</h1>
                {RestaurantList.map((restDetail, index) =>{
                    return (
                        <div>
                            <h1>{restDetail.name}</h1>
                            <p>{restDetail.times[0]}</p>
                            <p>{restDetail.times[1]}</p>
                        </div>
                    )
                })}
             </div>
        )
    }
}
