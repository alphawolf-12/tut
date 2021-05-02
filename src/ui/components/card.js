import React from 'react';
import './index.css';

function Card(props){
    const { name } = props;
    return (
    <div className="card" onClick={props.handleClick}>
        {name}   
    </div>
    );
}

export default Card;