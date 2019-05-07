import React, { Component } from 'react';
import ArrowDatePicker from './ArrowDatePicker/ArrowDatePicker';
import './MealsView.css';
import MealsContent from './MealsContent/MealsContent';
import Modal from './AddMeal';

class MealsView extends Component {
    constructor(props) {
        super(props);
        this.state={
            redirectToAddMeal: false
        };
        this.updateState1 = this.updateState1
    }

    updateState1 = (v) => {this.setState({ redirectToAddMeal: true })}

    render() {
        let modal;
        if(this.state.redirectToAddMeal) {
            modal = <Modal> Heres some content for the modal </Modal>;
        } else {
            modal = <div></div>;
        }
        //alert("VAR: " + this.state.redirectToAddMeal)
        return (
            <div className="MealsView">
                <ArrowDatePicker />
                <MealsContent updateStateCB={this.updateState1}/>
                {modal}
            </div>
        );
    }
}

export default MealsView;
