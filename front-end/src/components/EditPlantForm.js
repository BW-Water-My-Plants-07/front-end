import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
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
        align-items: flex-start;
        margin: 1rem 0;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
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

const EditPlantForm = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const { setPlants } = props;

    const [plant, setPlant] = useState({
        nickname:"",
        species:"",
        h2oFrequency:"",
        img:""
    })
    useEffect(()=> {
        axios.get(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants/${id}`)
        .then(res=>{
            setPlant(id)
        })
        .catch(err =>{
            console.log(err)
        })
    },[id])
    const handleChange = (e) =>{
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        axios.put(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants/${id}`, plant)
        .then(res=>{
            setPlants(res.data)
            push(`/plants-list/${id}`)
        })
    }
    const { nickname, species, h2oFrequency, img } = plant

    return(
        <StyledEditForm>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <div className="form-header">
                    <h3>Editing <strong>{plant.nickname}</strong></h3>
                 </div>
                 <div className="form-body">
                    <div className="form-group">
                        <label>Nickname: </label>
                        <input value={nickname} onChange={handleChange} name="nickname" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Species: </label>
                        <input value={species} onChange={handleChange} name="species" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>H2O Frequency: </label>
                        <input value={h2oFrequency} onChange={handleChange} name="h2oFrequency" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Image link: </label>
                        <input value={img} onChange={handleChange} name="img" type="text" className="form-control"/>
                    </div>
                 </div>
                 <div className="form-submit">
                    <input type="submit" className="submit-btn" value="Save"/>
                    <Link to={`/plants-list/${id}`}>
                        <input type="button" className="cancel-btn" value="Cancel" />
                    </Link>
                 </div>
            </form>
        </StyledEditForm>
        
    )
}
export default EditPlantForm