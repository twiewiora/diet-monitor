import React, {useState} from 'react';
import './MealContent.css';
import {Typography, IconButton} from '@material-ui/core';
import RateStrip from './RateStrip';
import PropTypes from 'prop-types';
import IngredientCard from './IngredientCard';
import './MealContent.css';
import Add from '@material-ui/icons/AddCircleRounded';

const MealContent = ({title}) => {
  const [ingredientsNumber] = useState(Math.trunc(Math.random() * 7));
  const names = ['owsianka', 'jogurt naturalny', 'kotlet schabowy', 'ziemniaki z zasmażką', 'banan', 'jabłko', 'spaghetti'];
  const chooseNames = (no) => {
    const res = [];
    for (let i = 0; i < no; i++) {
      res.push(names[Math.trunc(Math.random() * 7)]);
    }
    return res;
  };
  const chooseWeights = (no) => {
    const res = [];
    for (let i = 0; i < no; i++) {
      res.push(Math.trunc(Math.random() * 2000) + 'g');
    }
    return res;
  };
  const chosenNames = chooseNames(ingredientsNumber);
  const chosenWeights = chooseWeights(ingredientsNumber);
  return (
    <div className="MealContent">
      <RateStrip />
      <div style={{flexGrow: '1'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography gutterBottom variant='h6'>{title.toUpperCase()}</Typography>
        </div>
        <div className="Ingredients">
          {chosenNames.map((name, index) =>
            <IngredientCard
              name={name}
              weight={chosenWeights[index]}
              key={name + index + chosenWeights[index]}
            />)
          }

          <IconButton style={{height: '104px'}} color='primary'>
            <Add fontSize='large'/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

MealContent.propTypes = {
  title: PropTypes.string.isRequired
};

export default MealContent;