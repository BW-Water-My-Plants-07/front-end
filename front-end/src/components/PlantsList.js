import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.div`
    .plants-list-wrapper {
        padding-top: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }

    
    .plant-card {
        display: flex;
        width: 400px;
        margin: 0 auto;
        margin-bottom: 5rem;
        padding: 2rem;
        border: 5px #164A41 dotted;

        .plants-list-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            margin: 1rem;
            border-radius: 1rem;
        }
        p {
            font-size: 1.2rem;
            display: inline-block;
            text-decoration: none; 
            color: #164A41;
            margin: 1rem;
        }

    }

`
function PlantsList(props) {
    const { plants } = props;
    const { url } = useRouteMatch();

    return (
        <StyledList>
            <div className='plants-list-wrapper'>
                {plants.map(plant => (
                    <div
                        className='plant-card'
                        key={plant.id}
                    > 
                        <Link to={`${url}/${plant.id}`}>
                            <img className='plants-list-image'
                                src={plant.img}
                                alt={plant.nickname}
                            />
                            <p>Name: {plant.nickname}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </StyledList>
)
}

export default PlantsList;



