import React from 'react';
import WorkoutOption from './workout_options/WorkoutOption';
import './dashboard.css';
class WorkoutDashboard extends React.Component {


    render(){
        return (
            <div className="dashboard">
                <WorkoutOption />
            </div>
        )
    }
}

export default WorkoutDashboard;