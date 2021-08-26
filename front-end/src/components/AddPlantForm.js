import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'
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
                font-size: 1rem;
                font-weight: 200;
                letter-spacing: 1px;
                margin-bottom: 0.2rem;
              }  
              input {
                width: 130%;
                padding: 1rem 2rem;
                margin: 0.5rem 0;
                box-sizing: border-box;
                margin-bottom: 2rem;
              }
              .dropdown {
                width: 130%;
                padding: 1rem 3.6rem;
                margin: 0.5rem 0 1.8rem 0;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
        nickname: "",
        species: "",
        h2oFrequency: "",
        img:""
    })

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants", plant)
            .then(res => {
                console.log(res.data)
                setPlants(res.data)
                push(`/plants`)
            })
    }
    const { nickname, species, h2oFrequency, img } = plant

    return (
        <StyledAddPlant>
            <div className='form-wrapper'>
                <div className="form-header">
                    <h2>Add a Plant</h2>
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
                            <select 
                            value={h2oFrequency} 
                            onChange={handleChange} 
                            name="h2oFrequency" 
                            className="dropdown" >
                                <option value=''>--Select Watering Frequency--</option>
                                <option value='none'>None</option>
                                <option value='daily'>Daily</option>
                                <option value='twice a week'>Twice a Week</option>
                                <option value='weekly'>Weekly</option>
                                <option value='every two weeks'>Every Two Weeks</option>
                                <option value='every three weeks'>Every Three Weeks</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label>Image link </label>
                            <input value={img} onChange={handleChange} name="img" type="text" className="form-control" />
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