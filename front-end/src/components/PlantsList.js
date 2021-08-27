import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth'

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
    .cap:first-letter {
        text-transform: capitalize;
    }
    .add-plant {
        padding: 200px 0 500px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        border: 1px black solid;
    }
    h2 {
        font-size: 2rem;
        font-weight: 200;
        letter-spacing: 1px;
    }
    .switch {
        color: #212324;
        background-color: #b9e529;
        border-color: #b9e529;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 1px;
        padding: 13px 50px 13px;
        margin-top: 1rem;
      }
`
function PlantsList(props) {
    const [plants, setPlants] = useState([]);
    const { url } = useRouteMatch();
    useEffect(() => {
        axiosWithAuth()
            .get(`/plants`)
            .then(res => {
                setPlants(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <StyledList>
            { plants.length > 0 ?
                <div className='plants-list-wrapper'>
                    {plants.map(plant => (
                        <div
                            className='plant-card'
                            key={plant.plant_id}
                        >
                            <Link to={`${url}/${plant.plant_id}`}>
                                <img className='plants-list-image'
                                    src={plant.image ? plant.image : props.defaultImage}
                                    alt={plant.nickname}
                                />
                                <p className='cap'>Name: {plant.nickname}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                :
                <div className='add-plant'>
                    <h2>Please Add a Plant</h2>
                    <Link to="/add-plant">
                        <button type='button' className='switch'>
                            Add Plant
                        </button>
                    </Link>
                </div>
            }
        </StyledList>
    )
}

export default PlantsList;