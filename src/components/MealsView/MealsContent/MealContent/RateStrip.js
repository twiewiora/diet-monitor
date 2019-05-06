import React from 'react';
import './MealContent.css';
import {ListItem, List, Typography} from '@material-ui/core';
import Smile from '@material-ui/icons/SentimentSatisfiedRounded';
import Sad from '@material-ui/icons/SentimentDissatisfiedRounded';
import More from '@material-ui/icons/MoreVertRounded';

const RateStrip = () => {
  return (
    <List dense>
      <ListItem button>
        <Smile />
      </ListItem>
      <ListItem button>
        <Smile />
      </ListItem>
      <ListItem button>
        <Sad />
      </ListItem>
      <ListItem button>
        <More />
      </ListItem>
    </List>
  );
};

export default RateStrip;