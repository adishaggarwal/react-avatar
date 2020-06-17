import React from 'react';
import './Avatar.css';
import 'tachyons';

const Avatarlist =({name,job}) =>{
    
    

    return (
        <div className="avatarstyle grow shadow-4 text-center" >
                <img src={`https://joeschmoe.io/api/v1/${name}`} alt=""/>
                <h1>{name}</h1>
                <p>{job}</p>
    </div>
    )
}

export default Avatarlist;