import React from 'react';
import './addmusclegroup.css';
import axios from 'axios';

class AddMuscleGroup extends React.Component{

    addMuscleToList = () =>{
        console.log("Here")
        this.props.addMuscleToList();
        axios.get(`http://www.localhost:3001/`)
        .then(() => {
            console.log("back");
        });
    }

    render(){
        return(
            <div className="add">
                <button className="addButton" onClick={this.addMuscleToList}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>                
                </button>
            </div>
        )
    }

}

export default AddMuscleGroup;