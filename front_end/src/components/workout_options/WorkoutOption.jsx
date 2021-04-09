import React from 'react';
import {options} from './options.js';
import './options.css';


class WorkoutOption extends React.Component {

    state = {
        options: options
    };

    render(){
        return(
            <div className="options_display">
                <div className="options_wrapper">
                    <div>
                        {this.state.options.map((data) => {
                            return (
                                <div className="option">
                                    <h1>{data.amount_perweek}</h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkoutOption;