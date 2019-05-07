import React, {Component, useState} from 'react';
import './MealContent.css';
import {Typography, IconButton} from '@material-ui/core';
import RateStrip from './RateStrip';
import PropTypes from 'prop-types';
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
        console.log('The link was clicked.');
        this.props.updateStateCB(true);
    }

    chooseWeights = (no) => {
        const res = [];
        for (let i = 0; i < no; i++) {
            res.push(Math.trunc(Math.random() * 2000) + 'g');
        }
        return res;
    }

    chooseNames = (no) => {
        const names = ['owsianka', 'jogurt naturalny', 'kotlet schabowy', 'ziemniaki z zasmażką', 'banan', 'jabłko', 'spaghetti'];
        const res = [];
        for (let i = 0; i < no; i++) {
            res.push(names[Math.trunc(Math.random() * 7)]);
        }
        return res;
    };

    render() {
      const ingredientsNumber = 1 + Math.trunc(Math.random() * 7);
      const chosenNames = this.chooseNames(ingredientsNumber);
      const chosenWeights = this.chooseWeights(ingredientsNumber);
      return (
        <div className="MealContent">
          <RateStrip />
          <div style={{flexGrow: '1'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography gutterBottom variant='h6'>{this.state.title.toUpperCase()}</Typography>
            </div>
            <div className="Ingredients">
              {chosenNames.map((name, index) =>
                <IngredientCard
                  name={name}
                  weight={chosenWeights[index]}
                  key={name + index + chosenWeights[index]}
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
