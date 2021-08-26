import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import {
    useParams,
    Link,
    useRouteMatch,
    Route,
    // Switch,
    // NavLink
} from 'react-router-dom';
import EditPlantForm from './EditPlantForm';

const StyledPlant = styled.div`
    .plant-wrapper {
        padding: 150px 0;
    }
    .plant-header {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
    .plant-title-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 2rem;
        background-color: rgba(252,238,209,0.5);
        border-top: 5px #164A41 solid;
        padding: 2rem;

        h4 {
            font-size: 1.2rem;
            margin: 1.5rem;
            width: 15rem;
            text-align: start;
        }
    }
    .top {
        border-bottom: 1px black solid;
    }
    .detail {
        display: flex;
        width: 30rem;
    }
    .edit-btn {
        font-size: 1rem;
        text-decoration: none;
        color: #164A41;
        background-color: rgba(252,238,209,0.7);
        border-radius: 2rem;
        width: 8rem;
        padding: 1rem;
        margin: 0 auto;
        margin-top: 2rem;
    }
    .edit-btn:hover {
        text-decoration: underline;
    }
    .delete {
        background: #fff;
        color: #c0392b;
        border: 1px #c0392b solid;
        height: 2rem;
        width: 6rem;
        font-size: 1.3em;
        padding: 0 1.5em;
        transition: 800ms ease all;
        outline: none;
        margin: 0 auto;
        margin-top: 5rem;
    }
    .delete:hover {
        background: #c0392b;
        color: #fff;
    }
`

function Plant(props) {
    //will need to get confirmation on what props are available or if need to build useState inside here
    const { items, setPlant, deletePlant } = props;
    const { itemId } = useParams();
    // not sure if below is necessary
    const { path, url } = useRouteMatch();
    const plant = items.find(plant => plant.id === parseInt(itemId))

    if (!plant) return 'Plant not found...'

    const handleDeleteClick = () => {
        axios.delete(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants/${itemId}`)
            .then(res => {
                deletePlant(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <StyledPlant>
            <div className='plant-wrapper'>
                <div className='plant-header'>
                    <div className='image-wrapper'>
                        <img src={plant.img} alt={plant.nickname} />
                    </div>
                    <div className='plant-title-wrapper'>
                        {/* This is if we want to add an image for stretch */}
                        {/* <img src='' alt={plant.species} /> */}
                        {/* <h2>{if plant.nickname ? plant.nickname : plant.species}</h2> */}
                        <div className='details'>
                            <div className='detail top'>
                                <h4>Species:</h4>
                                <h4>{plant.species}</h4>
                            </div>
                            <div className='detail bottom'>
                                <h4>How often to water:</h4>
                                <h4>{plant.h2oFrequency}</h4>
                            </div>
                        </div>

                        <Link className="edit-btn" to={`${url}/edit-plant/${itemId}`}>
                            Edit Plant
                        </Link>
                        <Route path={`${url}/edit-plant/${itemId}`}>
                            <EditPlantForm setPlant={setPlant} />
                        </Route>
                    </div>
                    <button 
                        className='delete'
                        onClick={handleDeleteClick}>
                        Delete
                    </button>

                </div>
            </div>
        </StyledPlant>
    )
}

export default Plant;

