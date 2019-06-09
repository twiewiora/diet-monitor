import React, {Component} from 'react';
import './MealContent.css';
import {Typography, IconButton} from '@material-ui/core';
import RateStrip from './RateStrip';
import IngredientCard from './IngredientCard';
import './MealContent.css';
import Add from '@material-ui/icons/AddCircleRounded';

class MealContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: this.props.title
        };
    }

    onItemClick1 = () => {
        this.props.updateStateCB(true);
        this.props.setMeal(this.props.index);
    };

    render() {
      const ingredients =  this.props.meal? this.props.meal.ingredients: [];
      return (
        <div className="MealContent">
          <RateStrip meal={this.props.meal}/>
          <div style={{flexGrow: '1'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography gutterBottom variant='h6' style={{fontWeight: 'bold'}} >{this.state.title}</Typography>
            </div>
            <div className="Ingredients">
              {ingredients.map(({name, weight}, index) =>
                <IngredientCard
                  name={name}
                  weight={weight}
                  key={name + index + weight}
                  onRemove={() => this.props.onRemove(index)}
                  onEdit={()  => this.props.onEdit(index)}
                />)
              }

              <IconButton style={{height: '104px'}} color='primary' onClick={this.onItemClick1}>
                <Add fontSize='large'/>
              </IconButton>
            </div>
          </div>
        </div>
      );
    }
}

export default MealContent;
