import React from 'react';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MaterialUIPickers from './DateAndTimePickers/MaterialUIPickers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BootstrapInput from "./Meal"

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: '0',
    padding: theme.spacing.unit * 2,
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <center><Typography variant="h5">{children}</Typography></center>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: '10px',
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCount: 0
        }
    }

  handleClose = () => {
    this.props.updateStateCB(false);
  };

  handleOK = () => {
    this.props.updateStateCB(false);
  }

  addItem = (e) => {
      e.preventDefault();
      this.setState({
          itemsCount: this.state.itemsCount + 1
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.showModalAddMeal}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Posiłek
          </DialogTitle>
          <DialogContent>
            <List component="nav">
            <ListItem button>
              <ListItemText primary="Czas posiłku" />
              <ListItemIcon>
                <MaterialUIPickers/>
              </ListItemIcon>
            </ListItem>
                  {Array.apply(null, {length: this.state.itemsCount}).
                  map((item, index) =>
                    [
                        <ListItem button>
                        <ListItem>
                        <BootstrapInput/>
                        </ListItem>
                        </ListItem>
                    ])}
          </List>
          <Divider />
          </DialogContent>
          <List component="nav">
            <ListItem alignItem="center">
                <Grid container justify="center" 
                      alignItems="center" 
                      direction="row" 
                      className={classes.grid}>
                  <Grid item>
                    <Button variant="contained" 
                            color="secondary"
                            className={classes.button}
                            justify="center" 
                            alignItems="center" 
                            direction="row" 
                            onClick={this.addItem}>
                        Dodaj
                    </Button>
                  </Grid>
                </Grid>
            </ListItem>
          </List>
          <DialogActions>
            <Grid container justify="center" 
                      alignItems="center" 
                      direction="row" 
                      justify="space-evenly"
                      className={classes.grid}>
              <Grid item>
                <Fab onClick={this.handleOK} 
                    color="primary" 
                    aria-label="ok" 
                    className={classes.fab}>
                  OK
                </Fab>
              </Grid>
              <Grid item>
                <Fab onClick={this.handleClose} 
                    color="secondary" 
                    aria-label="anuluj" 
                    className={classes.fab}>
                  ANULUJ
                </Fab>
              </Grid>
            </Grid>
          </DialogActions>
</Dialog>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
