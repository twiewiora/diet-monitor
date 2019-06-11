import React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormLabel from "react-bootstrap/es/FormLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import Fab from "@material-ui/core/Fab/Fab";
import {withStyles} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Typography from "@material-ui/core/Typography/Typography";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions/DialogActions";
import PropTypes from "prop-types";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from "react-toasts";

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
            <Typography variant="h5">{children}</Typography>
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

class MealForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIngName: 'Banan',
            currentIngWeight: '',
            ingredientsList: []
        }
    }

    render() {
        const { classes } = this.props;
        const ingredients = ['Banan', 'Jabłko', 'Musli', 'Jogurt naturalny', 'Pizza'];

        return (
            <div>
                <Dialog
                    onClose={this.props.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.props.showModalAddMeal}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
                        {this.props.dialogTitle}
                    </DialogTitle>
                    <DialogContent>
                        <Form>
                            <FormGroup controlId="selectIngredients">
                                <FormLabel>Posiłek</FormLabel>
                                <FormControl as="select" onChange={(e) => this.props.handleNameChange(e)}>
                                    {ingredients.map((ingredient) => [
                                        <option>{ingredient}</option>
                                    ])}
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="ingredientsWeight">
                                <FormLabel>Waga posiłku</FormLabel>
                                <FormControl type="text" placeholder="waga (g)" onChange={(e) => this.props.handleWeightChange(e)}/>
                            </FormGroup>
                            <Button variant="contained" color="primary" onClick={() => this.props.addIngredients()}>{this.props.buttonText}</Button>
                            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
                        </Form>
                    </DialogContent>
                    <DialogActions>
                        <Grid container justify="center" alignItems="center" direction="row" justify="space-evenly" className={classes.grid}>
                            <Grid item>
                                <Fab onClick={this.props.handleOK} color="primary" aria-label="ok" className={classes.fab}>OK</Fab>
                            </Grid>
                            <Grid item>
                                <Fab onClick={this.props.handleClose} color="secondary" aria-label="anuluj" className={classes.fab}>ANULUJ</Fab>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

MealForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SimpleMealForm = withStyles(styles)(MealForm);

export default SimpleMealForm;
