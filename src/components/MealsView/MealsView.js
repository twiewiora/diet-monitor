import React, { Component } from 'react';
import ArrowDatePicker from './ArrowDatePicker/ArrowDatePicker';
import './MealsView.css';
import MealsContent from './MealsContent/MealsContent';
import SimpleModalWrapper from './AddMeal';
import EditModal from "./EditMeal";

class MealsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalAddMeal: false,
            showModalEditMeal: false,
            addMealAs: 0,
            mealToEdit: {},
            posInMealToEdit: 0,
            date: new Date()
        };
    }

    setIngredientsToEdit = (meal, pos) => {
        this.setState({
            mealToEdit: meal,
            posInMealToEdit: pos
        })
    };

    updateStateAddMeal = (visible) => {
        this.setState({
            showModalAddMeal: visible
        });
    };

    updateStateEditMeal = (visible) => {
        this.setState({
            showModalEditMeal: visible
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
                <MealsContent updateStateEditMeal={this.updateStateEditMeal}
                              updateStateAddMeal={this.updateStateAddMeal}
                              date={this.state.date.toISOString().slice(0,10)}
                              setMeal={this.setMeal}
                              setIngredientsToEdit={this.setIngredientsToEdit}/>
                <SimpleModalWrapper mealIndex={this.state.addMealAs}
                                    showModalAddMeal={this.state.showModalAddMeal}
                                    updateStateCB={this.updateStateAddMeal}
                                    date={this.state.date.toISOString().slice(0,10)} />
                <EditModal mealToEdit={this.state.mealToEdit}
                           posInMealToEdit={this.state.posInMealToEdit}
                           showModalEditMeal={this.state.showModalEditMeal}
                           updateStateCB={this.updateStateEditMeal}
                           date={this.state.date.toISOString().slice(0,10)} />
            </div>
        );
    }
}

export default MealsView;
