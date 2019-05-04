import React, {useState} from 'react';


import Left from '@material-ui/icons/ChevronLeftRounded';
import Right from '@material-ui/icons/ChevronRightRounded';

import DoubleLeft from '@material-ui/icons/FirstPageRounded';
import DoubleRight from '@material-ui/icons/LastPageRounded';


import './ArrowDatePicker.css';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const ArrowDatePicker = () => {
  const [date] = useState(new Date());
  return (
    <div className="ArrowDatePicker">
      <IconButton><DoubleLeft fontSize="large"/></IconButton>
      <IconButton><Left fontSize="large"/></IconButton>
      <TextField
        id="date"
        type="date"
        defaultValue={date.toISOString().slice(0, 10)}
      />
      <IconButton><Right fontSize="large"/></IconButton>
      <IconButton><DoubleRight fontSize="large"/></IconButton>
    </div>);
};

export default ArrowDatePicker;