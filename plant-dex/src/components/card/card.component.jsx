import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="plant" src={`https://robohash.org/${props.plant.id}?set=set4`}/>
        <h2> {props.plant.name} </h2>
        <p> {props.plant.email} </p>
    </div>
)