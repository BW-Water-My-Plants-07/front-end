import axios from 'axios';
import React from 'react'

import { useParams, Link } from 'react-router-dom';

function Plant(props){
    //will need to get confirmation on what props are available or if need to build useState inside here
    //where is deletePlant coming from?
    const { plants, deletePlant } = props;

    const {plantId} = useParams();
    // not sure if below is necessary
    // const { path, url } = useRouteMatch();

    const plant = plants.find(plant => plant.id === parseInt(plantId))

    if(!plant) return 'Plant not found...'

    const handleDeleteClick= ()=>{
        axios.delete(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants/${plantId}`)
            .then(res=>{
                deletePlant(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className='plant-wrapper'>
            <div className='plant-header'>
                <div className='image-wrapper'>
                    <img src={plant.url} alt={plant.name} />
                </div>
                <div className='plant-title-wrapper'>
                    {/* This is if we want to add an image for stretch */}
                    {/* <img src='' alt={plant.species} /> */}
                    {/* <h2>{if plant.nickname ? plant.nickname : plant.species}</h2> */}
                    <h4>Species: {plant.species}</h4>
                    <h4>How often to water: {plant.h2oFrequency}</h4>
                </div>
                <span className="delete">
                    <input
                        type="button"
                        value="Delete"
                        onClick={handleDeleteClick}
                    />
                </span>
                <Link className="edit-btn" to={`/edit-plant/${plantId}`}>
                Edit Plant
                </Link>
            </div>
            
        </div>

        
    )
}

export default Plant;

