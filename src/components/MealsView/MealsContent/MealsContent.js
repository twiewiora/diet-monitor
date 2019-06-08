import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import './MealsContent.css';
import {ListItem, List} from '@material-ui/core';
import MealContent from './MealContent/MealContent';
import Divider from '@material-ui/core/Divider';
import Hints from './Hints';
import {REMOVE_INGREDIENT} from '../../../store/actions/actionType';
import {connect} from 'react-redux';

class MealsContent extends Component {
  constructor(props) {
    super(props);
    this.meals = ['Śniadanie', 'Drugie Śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja'];
  }

  findMeal = (dayMeals, no) => {
    return dayMeals.find(meal => meal.meal === no);
  };

  findIndex = ({day, meal}) => {
    const meals = this.props.meals;
    return meals.findIndex(elem => elem.day === day && elem.meal === meal);
  };

  onIngredientEdit = (mealId, pos) => {
    const meal = this.props.meals[mealId];
    this.props.setIngredientsToEdit(meal, pos);
    this.props.updateStateEditMeal(true);
  };

  render() {
      const now = this.props.date;
      const dayMeals = this.props.meals.filter(day => day.day === now);
    return (
      <Card className="MealsContent">
        <div className="Meals">
          <List>
            {this.meals.map((meal, index) =>
              [
                <ListItem key={meal + index + 'meal'}>
                  <MealContent title={meal} updateStateCB={this.props.updateStateAddMeal} setMeal={this.props.setMeal} index={index}
                    meal={this.findMeal(dayMeals,index)}
                    onRemove={(pos) => this.props.onIngredientRemoved(this.findIndex(this.findMeal(dayMeals, index)), pos)}
                    onEdit ={(pos) => this.onIngredientEdit(this.findIndex(this.findMeal(dayMeals, index)), pos)}
                  />
                </ListItem>,
                <Divider key={meal + index + 'divider'} />
              ])}
          </List>
        </div>
        <Hints />
      </Card>
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
    onIngredientRemoved: (meal, ing) => dispatch({type: REMOVE_INGREDIENT, path: [meal, ing]})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsContent);
