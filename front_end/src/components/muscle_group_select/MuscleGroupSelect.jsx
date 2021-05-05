import React from 'react';
import PropTypes from 'prop-types';
import AddMuscleGroup from '../add_muscle/AddMuscleGroup';
import './musclegroupselect.css';


class MuscleGroupSelect extends React.Component {
    state = {
        muscles: []
    }

    addMuscleToList = () => {
        console.log("Adding muscle to list");
    }

    render() {
        return(
            <div className="sections">
                <h1>Day {this.props.day}:</h1>
                {/* List of all the muscles selected */}
                <AddMuscleGroup addMuscleToList={this.addMuscleToList} />
            </div>
        );
    }

}

MuscleGroupSelect.propTypes = {
    day: PropTypes.number
};

export default MuscleGroupSelect;
