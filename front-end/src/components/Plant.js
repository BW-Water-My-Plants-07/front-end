import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import EditPlantForm from './EditPlantForm';
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
    const [plant, setPlant] = useState({})
    const {id} = useParams()
    const { url } = useRouteMatch();

    useEffect(()=>{
        axiosWithAuth()
            .get(`/plants/${id}`)
            .then(res => {
                res.data.forEach( obj => {
                    // if(obj.plant_id === id){
                    //     return obj;
                    // }
                    setPlant(obj)
                })
                // setPlant(res.data)
                // console.log("info",res.data.id)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])

    // const plant = plants.find(plant => plant.id === parseInt(plantId))

    // if (!plant) return 'Plant not found...'

    const handleDeleteClick = (plantToDelete) => {
        axiosWithAuth()
        .delete(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants/${plantToDelete.id}`)
            .then(res => {
                props.setPlant(res.data)
                props.history.push('/plants')

            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <StyledPlant>
            <div className='plant-wrapper'>
                <div className='plant-header'>
                    <div className='image-wrapper'>
                        <img src={plant.image} alt={plant.nickname} />
                    </div>
                    <div className='plant-title-wrapper'>
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

                        <Link className="edit-btn" to={`${url}/edit-plant/${id}`}>
                            Edit Plant
                        </Link>
                        <Route path={`${url}/edit-plant/${id}`}>
                            <EditPlantForm setPlants={setPlant} plantId={id} />
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

