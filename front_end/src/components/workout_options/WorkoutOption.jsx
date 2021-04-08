import React from 'react';
import {options} from './options.js';


class WorkoutOption extends React.Component {

    state = {
        options: options
    };

    render(){
        return(
            <div>
                {this.state.options.map((data) => {
                    return (<div>
                        <h1>{data.amount_perweek}</h1>
                    </div>);
                })}
            </div>
        );
    }
}

export default WorkoutOption;