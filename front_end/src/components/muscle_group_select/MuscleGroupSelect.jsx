import React from 'react';
import PropTypes from 'prop-types';
import AddMuscleGroup from '../add_muscle/AddMuscleGroup';
import './musclegroupselect.css';


class MuscleGroupSelect extends React.Component {
    state = {
        muscles: []
    }

    addMuscleToList = (muscle) => {
        console.log("Adding muscle to list");
        const muscles = [...this.state.muscles, muscle];
        this.setState({
            muscles: muscles
        });
        this.props.addMuscleToDictionary(muscle, this.props.day);
    }

    render() {
        return(
            <div className="sections">
                <h1>Day {this.props.day}:</h1>
                {/* List of all the muscles selected */}
                <div className="musclegroupings">
                    <div>
                        {
                            this.state.muscles.map((data, index) => {
                                return <div key={index} className="muscles"> 
                                            <p>{data}</p>
                                    </div>
                            })
                        }
                    </div>
                
                    <div>                    
                        <AddMuscleGroup addMuscleToList={this.addMuscleToList} />
                    </div>
                </div>
            </div>
        );
    }

}

MuscleGroupSelect.propTypes = {
    day: PropTypes.number
};

export default MuscleGroupSelect;
