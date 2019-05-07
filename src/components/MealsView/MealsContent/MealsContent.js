import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import './MealsContent.css';
import {ListItem, List} from '@material-ui/core';
import MealContent from './MealContent/MealContent';
import Divider from '@material-ui/core/Divider';
import Hints from './Hints';

class MealsContent extends Component {
    constructor(props) {
        super(props);
        this.meals = ['Śniadanie', 'Drugie Śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja']
    }
    render() {
      return (
        <Card className="MealsContent">
          <div className="Meals">
            <List>
              {this.meals.map((meal, index) =>
                [
                  <ListItem key={meal + index + 'meal'}>
                    <MealContent title={meal} updateStateCB={this.props.updateStateCB}/>
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

export default MealsContent;
