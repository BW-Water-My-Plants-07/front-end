import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const EditPlantForm = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const { setPlants } = props;

    const [plant, setPlant] = useState({
        nickname:"",
        species:"",
        h2oFrequency:"",
    })
    useEffect(()=> {
        axios.get("")
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
        axios.put("", plant)
        .then(res=>{
            setPlants(res.data)
            push(`/plants-list/${id}`)
        })
    }
    const { nickname, species, h2oFrequency } = plant

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
                 </div>
                 <div className="form-submit">
                    <input type="submit" className="submit-btn" value="Save"/>
                    <Link to={`/plants-list/${id}`}><input type="button" className="cancel-btn" value="Cancel" /></Link>
                 </div>
            </form>
        </div>
        
    )
}
export default EditPlantForm