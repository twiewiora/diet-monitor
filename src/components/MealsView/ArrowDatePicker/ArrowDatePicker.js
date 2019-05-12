import React from 'react';

import Left from '@material-ui/icons/ChevronLeftRounded';
import Right from '@material-ui/icons/ChevronRightRounded';

import DoubleLeft from '@material-ui/icons/FirstPageRounded';
import DoubleRight from '@material-ui/icons/LastPageRounded';


import './ArrowDatePicker.css';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

class ArrowDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    changeDate(days) {
        this.state.date.setDate(this.state.date.getDate() + days);
        this.setState({
            date: this.state.date
        })
    }

    render() {
      return (
          <div className="ArrowDatePicker">
              <IconButton onClick={() => this.changeDate(-2)}><DoubleLeft fontSize="large"/></IconButton>
              <IconButton onClick={() => this.changeDate(-1)}><Left fontSize="large"/></IconButton>
              <TextField
                  id="date"
                  type="date"
                  value={this.state.date.toISOString().slice(0, 10)}
              />
              <IconButton onClick={() => this.changeDate(1)}><Right fontSize="large"/></IconButton>
              <IconButton onClick={() => this.changeDate(2)}><DoubleRight fontSize="large"/></IconButton>
          </div>);
    }

}

export default ArrowDatePicker;