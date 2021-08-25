import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

const StyledAddPlant = styled.div`
    padding: 150px 0;
    background-image: url('https://images.unsplash.com/photo-1492827016231-736013acccc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;

    opacity: 0.8;

    .form-wrapper {
        width: 40%;
        height: 500px;
        margin: 0 auto;
        border-top: 5px #164A41 solid;
        background-color: rgba(241,241,241,0.8);
        padding-bottom: 5rem;

        h2 {
            font-size: 2.5rem;
            margin: 8%;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin: 0 auto;
            align-items: center;
            
            label {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 1rem;
                font-weight: 200;
                letter-spacing: 1px;
                margin-bottom: 0.2rem;
              }
            
              input {
                width: 100%;
                padding: 1rem 2rem;
                margin: 0.5rem 0;
                box-sizing: border-box;
                margin-bottom: 2rem;
              }
        }

        .submit-btn {
            background: #1AAB8A;
            color: #fff;
            border: none;
            position: relative;
            height: 40px;
            font-size: 1.5em;
            padding: 0 1.5em;
            transition: 800ms ease all;
            outline: none;
            border-radius: 10px;
            width: 7rem;
            margin: 2rem;
        }
        .submit-btn:hover {
            background: #fff;
            color: #1AAB8A;
        }

        .cancel-btn {
            background: #989898;
            color: #fff;
            border: none;
            position: relative;
            height: 40px;
            font-size: 1.5em;
            padding: 0 1.5em;
            transition: 800ms ease all;
            outline: none;
            border-radius: 10px;
            width: 7rem;
            margin: 2rem;
        }

        .cancel-btn:hover {
            background: #E0E0E0;
            color: #505050;
        }

    }


    
`

const AddPlantForm = props => {
    const { push } = useHistory();
    const { setPlants } = props;

    const [plant, setPlant] = useState({
        nickname:"",
        species:"",
        h2oFrequency:"",
    })
    
    const handleChange = (e) =>{
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.put("", plant)
            .then(res => {
                setPlants(res.data)
                push(`/plants-list`)
            })
    }
    const { nickname, species, h2oFrequency } = plant

    return (
        <StyledAddPlant>
            <div className='form-wrapper'>
                <div className="form-header">
                    <h2>Add a Plant<strong>{plant.nickname}</strong></h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-body">
                        <div className="form-group">
                            <label>Nickname </label>
                            <input value={nickname} onChange={handleChange} name="nickname" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Species </label>
                            <input value={species} onChange={handleChange} name="species" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>H2O Frequency </label>
                            <input value={h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-submit">
                        <input type="submit" className="submit-btn" value="Save" />
                        <Link to={`/plants-list`}><input type="button" className="cancel-btn" value="Cancel" /></Link>
                    </div>
                </form>
            </div>


        </StyledAddPlant>

    )
}
export default AddPlantForm