import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function PlantsList(props){
    const { items } = props;
    const { url } = useRouteMatch();

    return (
        <div className='plants-list-wrapper'>
            {items.map(item => (
                <div
                    className='plant-card'
                    key={plant.id}
                >
                    <Link to={`${url}/${plant.id}`}>
                        {/* Keeping this commented in case we want to use images */}
                        {/* <img
                            className='plant-list-image'
                            src={plant.imageURL}
                            alt={plant.name}
                        /> */}
                        <p>{plant.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
} 

export default PlantsList;