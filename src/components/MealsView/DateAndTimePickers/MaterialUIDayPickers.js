import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers';

const styles = {
  grid: {
    width: '50%',
  },
};

class MaterialUIDayPickers extends React.Component {
  state = {
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="flex-start" 
                          alignItems="center" 
                          direction="row" 
                          className={classes.grid}>
            <DatePicker
              margin="normal"
              label={this.props.title}
              value={selectedDate}
              direction="row"
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIDayPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIDayPickers);