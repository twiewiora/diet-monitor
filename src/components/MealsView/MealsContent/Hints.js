import React from 'react';
import './MealsContent.css';
import { Typography} from '@material-ui/core';

const MealsContent = () => {

  return (
    <div className="Hints">
      <Typography variant='h5' gutterBottom style={{fontWeight: 'bold'}}>Podpowiedzi:</Typography>
      <Typography variant='subtitle1'>- Zjedz więcej białka</Typography>
      <Typography variant='subtitle1'>- Pójdź pobiegać</Typography>
      <Typography variant='subtitle1'>- Odmów sobie czekolady</Typography>
    </div>
  );
};

export default MealsContent;