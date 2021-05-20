import React from 'react';
import {withRouter} from 'react-router-dom';
import MuscleGroupSelect from '../muscle_group_select/MuscleGroupSelect';


class MuscleGroupDashboard extends React.Component{

    state = {
        dayswithmuscle: {}
    }

    listDays = () => {
        let days = this.props.match.params.days;
        let sections=[];
        for(let i = 1; i <= days; i++)
            sections.push(<MuscleGroupSelect addMuscleToDictionary={this.addMuscleToDictionary} 
                                            deleteMuscleFromDictionary={this.deleteMuscleFromDictionary}
                                            day={i} key={i} />)

        return sections;
    }

    handleOnSubmit = () => {
        console.log(this.state.dayswithmuscle)
    }

    // appends the muscle to the dictionary corresponding to the day(as key)
    addMuscleToDictionary = (muscle, day) => {
        
    }

    // deletes the muscle from the dictionary corresponding to the day(as key)
    deleteMuscleFromDictionary = () => {

    }

    render(){
        return(
            <div>
                {this.listDays()}

                <div>
                    <button onClick={() => this.handleOnSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(MuscleGroupDashboard);