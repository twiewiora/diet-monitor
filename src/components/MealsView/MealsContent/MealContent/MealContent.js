import React from 'react';
import './MealContent.css';
import {ListItem, List, Typography} from '@material-ui/core';
import RateStrip from './RateStrip';
import PropTypes from 'prop-types';
import IngrdientCard from './IngredientCard';
import './MealContent.css';

const MealContent = ({title}) => {
  return (
    <div className="MealContent">
      <RateStrip />
      <div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography gutterBottom variant='h6'>{title.toUpperCase()}</Typography>
        </div>
        <div className="Ingredients">
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
          <IngrdientCard/>
        </div>
      </div>
    </div>
  );
};

MealContent.propTypes = {
  title: PropTypes.string.isRequired
};

export default MealContent;