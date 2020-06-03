import React, { Component } from 'react';
import Interns from '../data/internList';
import List from './singleList/List';


class Lists extends Component {
    constructor(){
        super();
        this.state={
            followedIn:[]
        };
    }
    render() {

       let wholeData=  Interns.map(el=>{
       return <List data={el}/>
       })
        return (
            <div>
                {wholeData}
            </div>
        )
    }
}

export default Lists;