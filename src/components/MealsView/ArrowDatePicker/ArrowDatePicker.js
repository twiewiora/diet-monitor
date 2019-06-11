import React from 'react';

import Left from '@material-ui/icons/ChevronLeftRounded';
import Right from '@material-ui/icons/ChevronRightRounded';

import './ArrowDatePicker.css';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

class ArrowDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    };
  }

  changeDate(days) {
    this.state.date.setDate(this.state.date.getDate() + days);
    this.props.onDateChange(this.state.date);
  }

  setDate(event) {
      let parts = event.target.value.split('-');
      let currentDate = new Date(parts[0], parts[1] - 1, parts[2]);
      this.state.date.setDate(currentDate.getDate());
      this.props.onDateChange(this.state.date);
  }

  render() {
    return (
      <div className="ArrowDatePicker">
        <IconButton onClick={() => this.changeDate(-1)}><Left fontSize="large"/></IconButton>
        <TextField
          id="date"
          type="date"
          value={this.state.date.toISOString().slice(0, 10)}
          onChange={e => this.setDate(e)}
        />
        <IconButton onClick={() => this.changeDate(1)}><Right fontSize="large"/></IconButton>
      </div>);
  }

}

export default ArrowDatePicker;