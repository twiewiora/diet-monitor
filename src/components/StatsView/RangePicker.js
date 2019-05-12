import React, { useState, useContext, useRef, Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersContext } from '@material-ui/pickers';
import MaterialUIDayPickers from '../DateAndTimePickers/MaterialUIDayPickers'

class DateRangePicker extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="DateRangePicker">
       <Grid container justify="center" 
                      alignItems="center" 
                      direction="row"
                      spacing="1">
          <Grid item>
          <MaterialUIDayPickers title="Statystyki od"/>
          </Grid>
          <Grid item>
          <MaterialUIDayPickers title="Statystyki do"/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DateRangePicker;