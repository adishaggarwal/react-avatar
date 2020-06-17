import React, { Component } from 'react';
import './Avatar.css'
import Avatarlist from './Avatarlist';

class Avatar extends Component {

    constructor(){
        super();
        this.state={
            head:"Welcome to AVATAR WORLD"
        }
    }

    namechange(){
        this.setState({
            head:"Check out my other projects at https://github.com/adishaggarwal"
        })
    }

    render()
    {
        const list=[
            {
                name:"Kanav Gupta",
                job:"Ration King"
            },
            {
                name:"Raghav Jain",
                job:"Business Tycoon"
            },
            {
                name:"Sumi Singh",
                job:"Vehla"
            },
            {
                name:"Bhavneet Bajwa",
                job:"Landlord"
            }
        ];
    
       const avatarcard = list.map((avatar1,i)=>{
           return <Avatarlist key={i} name={list[i].name}
                              job={list[i].job} />
       })
    
        return (
            <div className="text-center">
              <h1 className="heading">{this.state.head}</h1>
              <div className="main">
                {avatarcard}
              </div>
             
              <button onClick={()=> this.namechange()} className="btn btn-lg b1">SUBSCRIBE</button>      
        </div>
        )
    }
    
}

export default Avatar;