import React, { Component } from 'react';
import '../Styles/ListStyles.css' ;

export default class List extends Component {
    constructor(props) {
        super(props)
    }

    renderItem () {
      return  (this.props.searchResults.map((item) =>{
            return (
                <div> 
                    <li className="RestList"> { item.name }</li>
                    <li className="TimesList"> { item.times }</li>
                </div>
                )
        }))
    }
    render() {
        console.log(this.props)
        return (
            <div>
               { this.renderItem()}
            </div>
        )
    }
}
