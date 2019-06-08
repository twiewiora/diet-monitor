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
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormLabel from "react-bootstrap/es/FormLabel";
import FormControl from "react-bootstrap/es/FormControl";
import {ADD_MEAL} from "../../store/actions/actionType";
import connect from "react-redux/es/connect/connect";

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
            currentIngName: 'Banan',
            currentIngWeight: '',
            ingredientsList: []
        }

    }

  handleClose = () => {
      this.setState({
          ingredientsList: [],
          currentIngName: 'Banan',
          currentIngWeight: ''
      });
      this.props.updateStateCB(false);
  };

  handleOK = () => {
      const currentDateText = this.props.date;
      const meal = {
          day: currentDateText,
          meal: 0,
          ingredients: this.state.ingredientsList
      };
      this.props.onMealAdded(meal);
      this.setState({
          ingredientsList: [],
          currentIngName: 'Banan',
          currentIngWeight: ''
      });
      this.props.updateStateCB(false);
  };

  handleNameChange(event) {
    this.setState({
        currentIngName: event.target.value
    })
  };

  handleWeightChange(event) {
    this.setState({
        currentIngWeight: event.target.value
    })
  };

  addIngredients() {
      const ingredient = {
          name: this.state.currentIngName,
          weight: this.state.currentIngWeight
      };
      this.setState({
          ingredientsList: [...this.state.ingredientsList, ingredient]
      });
  }

  render() {
    const { classes } = this.props;
    const ingredients = ['Banan', 'Jabłko', 'Musli', 'Jogurt naturalny', 'Pizza'];

    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.showModalAddMeal}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Nowy Posiłek
          </DialogTitle>
          <DialogContent>
            <Form>
                <FormGroup controlId="selectIngredients">
                    <FormLabel>Posiłek</FormLabel>
                    <FormControl as="select" onChange={(e) => this.handleNameChange(e)}>
                        {ingredients.map((ingredient) => [
                            <option>{ingredient}</option>
                        ])}
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="ingredientsWeight">
                    <FormLabel>Waga posiłku</FormLabel>
                    <FormControl type="text" placeholder="waga (g)" onChange={(e) => this.handleWeightChange(e)}/>
                </FormGroup>
                <Button variant="contained" color="primary" onClick={() => this.addIngredients()}>Dodaj posiłek</Button>
            </Form>
          </DialogContent>
          <DialogActions>
            <Grid container justify="center" alignItems="center" direction="row" justify="space-evenly" className={classes.grid}>
              <Grid item>
                <Fab onClick={this.handleOK} color="primary" aria-label="ok" className={classes.fab}>OK</Fab>
              </Grid>
              <Grid item>
                <Fab onClick={this.handleClose} color="secondary" aria-label="anuluj" className={classes.fab}>ANULUJ</Fab>
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

const mapStateToProps = state => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMealAdded: (meal) => dispatch({type: ADD_MEAL, path: [meal]})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModalWrapped);
