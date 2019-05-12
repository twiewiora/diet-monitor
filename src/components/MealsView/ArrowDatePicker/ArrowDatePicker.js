import React from 'react';

import Left from '@material-ui/icons/ChevronLeftRounded';
import Right from '@material-ui/icons/ChevronRightRounded';

import DoubleLeft from '@material-ui/icons/FirstPageRounded';
import DoubleRight from '@material-ui/icons/LastPageRounded';


import './ArrowDatePicker.css';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import MaterialUIDayPicker from '../DateAndTimePickers/MaterialUIDayPickers'

class ArrowDatePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
          <div className="ArrowDatePicker">
            <MaterialUIDayPicker title={"Dzień"}/>
          </div>);
    }

}

export default ArrowDatePicker;