import React from 'react';
import {ADD_MEAL} from "../../store/actions/actionType";
import connect from "react-redux/es/connect/connect";
import MealForm from "./MealForm";

class SimpleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIngName: 'Banan',
            currentIngWeight: '',
            ingredientsList: []
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOK = this.handleOK.bind(this);
        this.addIngredients = this.addIngredients.bind(this);
    }

  handleClose = () => {
      this.setState({
          ingredientsList: [],
          currentIngName: 'Banan',
          currentIngWeight: ''
      });
      this.props.updateStateCB(false);
  };

  handleOK = () => {
      const currentDateText = this.props.date;
      const meal = {
          day: currentDateText,
          meal: this.props.mealIndex,
          ingredients: this.state.ingredientsList
      };
      this.props.onMealAdded(meal);
      this.setState({
          ingredientsList: [],
          currentIngName: 'Banan',
          currentIngWeight: ''
      });
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
      const ingredient = {
          name: this.state.currentIngName,
          weight: this.state.currentIngWeight !== '' ? this.state.currentIngWeight + 'g' : '0g'
      };
      this.setState({
          ingredientsList: [...this.state.ingredientsList, ingredient]
      });
  }

  render() {
    return (
      <MealForm showModalAddMeal={this.props.showModalAddMeal}
                dialogTitle={'Nowy posiłek'}
                buttonText={'Dodaj posiłek'}
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
        onMealAdded: (meal) => dispatch({type: ADD_MEAL, path: [meal]})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);
