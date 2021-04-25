import React from 'react';
import {withRouter} from 'react-router-dom';
import MuscleGroupSelect from '../muscle_group_select/MuscleGroupSelect';


class MuscleGroupDashboard extends React.Component{


    listDays = () => {
        let days = this.props.match.params.days;
        let sections=[];
        for(let i = 1; i <= days; i++)
            sections.push(<MuscleGroupSelect day={i} key={i} />)

        return sections;
    }

    render(){
        console.log(this.props.match.params.days)
        return(
            <div>
                {this.listDays()}
            </div>
        );
    }
}

export default withRouter(MuscleGroupDashboard);