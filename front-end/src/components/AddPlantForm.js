import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

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
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post("https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants", plant)
        .then(res=>{
            setPlants(res.data)
            push(`/plants-list`)
        })
    }
    const { nickname, species, h2oFrequency } = plant

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Add a Plant! <strong>{plant.nickname}</strong></h1>
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
                    <Link to={`/plants-list`}><input type="button" className="cancel-btn" value="Cancel" /></Link>
                 </div>
            </form>
        </div>
        
    )
}
export default AddPlantForm