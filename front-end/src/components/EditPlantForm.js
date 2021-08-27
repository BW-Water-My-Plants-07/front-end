import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components';

const StyledEditForm = styled.div`
    .form-wrapper {
        margin: 4rem 0;
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 1px;
    }

    .form-body {
        display: flex;
        flex-direction: column;
        margin: 2rem;
        width: 20rem;
      }
      label {
        display: flex;
        flex-direction: column;
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
      .dropdown {
        width: 100%;
        padding: 1rem 3.6rem;
        margin: 0.5rem 0 1.8rem 0;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        text-align: center;
      }
      .form-submit {
          display: flex;
          width: 80%;
          justify-content: space-evenly;
      }
      .submit-btn {
        color: #212324;
        background-color: #b9e529;
        border-color: #b9e529;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 10rem;
      }
      .cancel-btn {
        color: #212324;
        background-color: #b9e529;
        border-color: #b9e529;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 10rem;
      }
`
const initialValues = {
    nickname: "",
    species: "",
    h2oFrequency: "",
    image:""
}
const EditPlantForm = props => {
    const [plant, setPlant] = useState(initialValues)

    const updateForm = (inputName, inputValue) => {
        setPlant({
            ...plant,
            [inputName]: inputValue
        })
    }
    const submitForm = e => {
        const newPlant ={
            nickname: plant.nickname.trim(),
            species: plant.species.trim(),
            h2oFrequency: plant.h2oFrequency.trim(),
            image: plant.image.trim()
          }
        axiosWithAuth()
        .put("https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants", newPlant)
            .then(res => {
                setPlant(res.data)
            })
    }
    const history = useHistory()
    
    const onChange = e => {
        const {name,value} = e.target
        updateForm(name,value)
    }
    const onSubmit = e => {
        e.preventDefault()
        submitForm()
        history.push('/plants')
    }

    return (
        <StyledEditForm>
            <div className='form-wrapper'>
                <div className="form-header">
                    <h2>Add a Plant</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-body">
                        <div className="form-group">
                            <label>Nickname </label>
                            <input value={plant.nickname} onChange={onChange} name="nickname" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Species </label>
                            <input value={plant.species} onChange={onChange} name="species" type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>H2O Frequency </label>
                            <select 
                            value={plant.h2oFrequency} 
                            onChange={onChange} 
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
                            <input value={plant.image} onChange={onChange} name="image" type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-submit">
                        <input type="submit" className="submit-btn" value="Save" />
                        <Link to={`/plants`}><input type="button" className="cancel-btn" value="Cancel" /></Link>
                    </div>
                </form>
            </div>
        </StyledEditForm>
    )
}
export default EditPlantForm