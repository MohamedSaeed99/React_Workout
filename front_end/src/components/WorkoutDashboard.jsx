import React from 'react';
import WorkoutOption from './workout_options/WorkoutOption';
import MuscleGroupDashboard from './muscle_group_dashboard/MuscleGroupDashboard';

import './dashboard.css';
import { Route } from 'react-router-dom'

class WorkoutDashboard extends React.Component {


    render(){
        return (
            <div className="dashboard">
                <Route exact path="/"><WorkoutOption /></Route>
                <Route path="/muscle/select/:days"><MuscleGroupDashboard /></Route>
            </div>
        )
    }
}

export default WorkoutDashboard;