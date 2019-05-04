import React from 'react';
import Card from '@material-ui/core/Card';
import './MealsContent.css';
import {Typography} from '@material-ui/core';

const MealsContent = () => {
  return (
    <Card className="MealsContent">
        pies
      <div>
        <Typography variant="h5" gutterBottom>
            h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
            h3. Heading
        </Typography>
      </div>
    </Card>
  );
};

export default MealsContent;