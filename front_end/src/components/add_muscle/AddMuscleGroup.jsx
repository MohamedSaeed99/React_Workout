import React from 'react';
import './addmusclegroup.css';
import {PlusCircleIcon} from '@primer/octicons-react';
import axios from 'axios';

class AddMuscleGroup extends React.Component{

    addMuscleToList = () =>{
        this.props.addMuscleToList();
        axios.get(`http://www.localhost:3001/`)
        .then(() => {
            console.log("back");
        });
    }

    render(){
        return(
            <div className="add">
                <PlusCircleIcon onClick={() => {this.addMuscleToList()}} size={30} className="addButton" />
            </div>
        )
    }

}

export default AddMuscleGroup;