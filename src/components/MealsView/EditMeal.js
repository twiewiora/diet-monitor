import React from 'react';
import {EDIT_MEAL} from "../../store/actions/actionType";
import connect from "react-redux/es/connect/connect";
import MealForm from "./MealForm";

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIngName: '',
            currentIngWeight: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOK = this.handleOK.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
    }

    handleClose = () => {
        this.props.updateStateCB(false);
    };

    handleOK = () => {
        const meal = this.props.mealToEdit;
        const ing = meal.ingredients[this.props.posInMealToEdit];
        ing.name = this.state.currentIngName;
        ing.weight = this.state.currentIngWeight !== '' ? this.state.currentIngWeight + 'g' : '0g';
        this.props.onMealEdited(meal, ing, this.props.posInMealToEdit);
        this.props.updateStateCB(false);
    };

    handleNameChange(event) {
        this.setState({
            currentIngName: event.target.value
        })
    };

    handleWeightChange(event) {
        this.setState({
            currentIngWeight: event.target.value
        })
    };

    addIngredients() {
    }

    render() {
        return (
            <MealForm showModalAddMeal={this.props.showModalEditMeal}
                      dialogTitle={'Edytuj posiłek'}
                      buttonText={'Zapisz posiłek'}
                      handleClose={this.handleClose}
                      handleOK={this.handleOK}
                      handleNameChange={this.handleNameChange}
                      handleWeightChange={this.handleWeightChange}
                      addIngredients={this.addIngredients}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMealEdited: (meal, ing, pos) => dispatch({type: EDIT_MEAL, path: [meal, ing, pos]})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
