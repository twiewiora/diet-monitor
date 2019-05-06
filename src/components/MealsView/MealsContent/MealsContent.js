import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import './MealsContent.css';
import {ListItem, List} from '@material-ui/core';
import MealContent from './MealContent/MealContent';
import Divider from '@material-ui/core/Divider';
import Hints from './Hints';

const MealsContent = () => {
  const [meals] = useState(['Śniadanie', 'Drugie Śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja']);

  return (
    <Card className="MealsContent">
      <div className="Meals">
        <List>
          {meals.map((meal, index) =>
            [
              <ListItem key={meal + index + 'meal'}>
                <MealContent title={meal}/>
              </ListItem>,
              <Divider key={meal + index + 'divider'} />
            ])}
        </List>
      </div>
      <Hints />
    </Card>
  );
};

export default MealsContent;