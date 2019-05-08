import React, { Component } from 'react';
import ArrowDatePicker from './ArrowDatePicker/ArrowDatePicker';
import './MealsView.css';
import MealsContent from './MealsContent/MealsContent';
import SimpleModalWrapper from './AddMeal';

class MealsView extends Component {
    constructor(props) {
        super(props);
        this.state={
            showModalAddMeal: false
        };
        this.updateState1 = this.updateState1;
    }

    updateState1 = (v) => { this.setState(prevState => ({ showModalAddMeal: v })); }

    render() {
        return (
            <div className="MealsView">
                <ArrowDatePicker />
                <MealsContent updateStateCB={this.updateState1}/>
                <SimpleModalWrapper showModalAddMeal={this.state.showModalAddMeal} updateStateCB={this.updateState1} />
            </div>
        );
    }
}

export default MealsView;
