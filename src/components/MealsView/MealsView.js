import React, { Component } from 'react';
import ArrowDatePicker from './ArrowDatePicker/ArrowDatePicker';
import './MealsView.css';
import MealsContent from './MealsContent/MealsContent';
import SimpleModalWrapper from './AddMeal';

class MealsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalAddMeal: false,
            date: new Date()

        };
        this.updateState1 = this.updateState1;
    }

    updateState1 = (v) => { this.setState(prevState => ({ showModalAddMeal: v })); }

    onDateChange = (date) => {
        this.setState({...this.state, date})
    }

    render() {
        return (
            <div className="MealsView">
                <ArrowDatePicker date={this.state.date} onDateChange={this.onDateChange}/>
                <MealsContent updateStateCB={this.updateState1} date={this.state.date.toISOString().slice(0,10)}/>
                <SimpleModalWrapper showModalAddMeal={this.state.showModalAddMeal} updateStateCB={this.updateState1} />
            </div>
        );
    }
}

export default MealsView;
