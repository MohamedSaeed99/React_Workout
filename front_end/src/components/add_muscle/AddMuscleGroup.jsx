import React from 'react';
import './addmusclegroup.css';
import axios from 'axios';

class AddMuscleGroup extends React.Component{

    state = {
        popup: false,
        muscles:[]
    };

    listMuscles = () =>{
        axios.get(`http://www.localhost:3001/`)
        .then((response) => {
            this.setState({
                popup: true,
                muscles: response.data
            });
        });
    }

    onMuscleClick = (e) => {
        this.props.addMuscleToList(e.target.textContent);
        this.setState({
            popup: false
        })
    }

    render(){
        return(
            <div className="add">
                {
                    this.state.popup ? 
                        <div className="popup">
                            {this.state.muscles.map(data => {
                                return <div onClick={(e) => this.onMuscleClick(e)} key={data.id} className="muscle"><p>{data.name}</p></div>
                            })}
                        </div> : 
                        <div></div>
                }

                <button className="addButton" onClick={this.listMuscles}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>                
                </button>
            </div>
        )
    }

}

export default AddMuscleGroup;