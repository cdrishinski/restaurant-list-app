import React, { Component } from 'react'
import RestaurantList from '../RestaurantList.json';


export default class Restaurant extends Component {
    constructor(props){
        super(props)
        this.state= {
          restDetail: 
              {
                  name: '',
                  times: ''
              }
    }
}



   

    render() {
        return (
            <div>
                <h1>Restaurant page!</h1>
            
                { RestaurantList.map( (restDetail, index) =>{
                    return(
                        <ul>
                            <li>{ restDetail.name }
                            </li>
                                <ul>
                                    <li> { restDetail.times[0] }</li>
                                    <li> { restDetail.times[1] }</li>
                                    <li> { restDetail.times[2] }</li>
                                </ul>
                        </ul>
                        
                    )
                    
                })}
               

             </div>
            )
        }
    }
