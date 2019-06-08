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
            addMealAs: 0,
            date: new Date()
        };
    }

    updateState = (visible) => {
        this.setState({
            showModalAddMeal: visible
        });
    };

    setMeal = (mealNo) => {
        this.setState({
            addMealAs: mealNo
        })
    };

    onDateChange = (date) => {
        this.setState({...this.state, date})
    };

    render() {
        return (
            <div className="MealsView">
                <ArrowDatePicker date={this.state.date} onDateChange={this.onDateChange}/>
                <MealsContent updateStateCB={this.updateState} date={this.state.date.toISOString().slice(0,10)} setMeal={this.setMeal}/>
                <SimpleModalWrapper mealIndex={this.state.addMealAs} showModalAddMeal={this.state.showModalAddMeal} updateStateCB={this.updateState} date={this.state.date.toISOString().slice(0,10)} />
            </div>
        );
    }
}

export default MealsView;
