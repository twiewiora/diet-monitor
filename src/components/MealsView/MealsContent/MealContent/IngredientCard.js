import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography} from '@material-ui/core';
import Edit from '@material-ui/icons/EditRounded';
import Remove from '@material-ui/icons/RemoveCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const IngredientCard = ({name, weight, onRemove}) => {
  return (
    <Card className="Ingredient">
      <div className="IngredientDescription">
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='subtitle1'>{weight}</Typography>
      </div>

      <div className="IngredientControls">
        <IconButton color='secondary' onClick={onRemove}>
          <Remove />
        </IconButton>
        <IconButton color='primary'>
          <Edit />
        </IconButton>
      </div>
    </Card>
  );
};

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};


export default IngredientCard;