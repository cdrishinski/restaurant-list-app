import React, { Component } from 'react'
import RestaurantList from '../RestaurantList.json';


export default class Restaurant extends Component {
    constructor(props){
        super(props)
        this.state= {
            search: "",
            searchResults: []
    }
}


filterRestaurants (){
    let localArr = RestaurantList.filter(currVal => {
       return currVal.name.indexOf(this.state.search) != -1; 
    })
    console.log(localArr)
}
   

    render() {
        console.log(this.state.search)
        return (
            <div>
                <h1>Restaurant page!</h1>

                <input type="text" placeholder="Search Restaurants" onChange={(text) => this.setState({search: text.target.value})} value={this.state.search} />

            
                <ul>
                    { this.filterRestaurants() }
                {/* { RestaurantList.filter( (restDetail, index) =>{ 
                //         (
                //             <div>
                //             <li>{ restDetail.name }
                //             </li>
                //                     <ul>
                //                         <li> { restDetail.times[0] }</li>
                //                         <li> { restDetail.times[1] }</li>
                //                         <li> { restDetail.times[2] }</li>
                //                     </ul>
                //         </div>
                // )
                  
                        
                    {/* })} */}
                    </ul>
               
                    
             </div>
            )
        }
    }
    