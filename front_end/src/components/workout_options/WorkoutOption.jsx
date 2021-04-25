import React from 'react';
import {options} from './options.js';
import {withRouter} from 'react-router-dom';
import './options.css';


class WorkoutOption extends React.Component {
    state = {
        options: options
    };

    handleOnClick = (event) => {
        let optionString = event.target.textContent;
        let days = this.converOptionsStringToInt(optionString);

        this.props.history.push(`/muscle/select/${days}`);
    }

    converOptionsStringToInt = (optionString) => {
        return parseInt(optionString.split(' ')[0])
    }

    render(){
        return(
            <div className="options_display">
                <div className="options_wrapper">
                    <div>
                        {this.state.options.map((data) => {
                            return (
                                <div key={data.key} className="option" onClick={(e) => this.handleOnClick(e)}>
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

export default withRouter(WorkoutOption);