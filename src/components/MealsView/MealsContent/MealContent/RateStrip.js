import React, {Component} from 'react';
import './MealContent.css';
import {ListItem, List} from '@material-ui/core';
import Smile from '@material-ui/icons/SentimentSatisfiedRounded';
import Sad from '@material-ui/icons/SentimentDissatisfiedRounded';
import More from '@material-ui/icons/MoreVertRounded';
import {CHECK_MOOD} from "../../../../store/actions/actionType";
import connect from "react-redux/es/connect/connect";

class RateStrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedMood: 0
        };
    }

    changeMood (value) {
        this.setState({
            checkedMood: this.state.checkedMood === value ? 0 : value
        });
        this.props.onMoodCheck(this.props.meal, this.state.checkedMood)
    }

    render() {
        const goodColor = '#37d155';
        const mehColor = '#d17d1f';
        const badColor = '#d1423f';
        return (
            <List dense>
                <ListItem button onClick={() => this.changeMood(1)}>
                    <Smile style={{borderRadius:'50%', background: this.state.checkedMood === 1 ? goodColor : '#FFFFFF'}}/>
                </ListItem>
                <ListItem button onClick={() => this.changeMood(2)} >
                    <div style={{borderRadius:'50%', background: this.state.checkedMood === 2 ? mehColor : '#FFFFFF'}}>
                        <MehFace/>
                    </div>
                </ListItem>
                <ListItem button onClick={() => this.changeMood(3)}>
                    <Sad style={{borderRadius:'50%', background: this.state.checkedMood === 3 ? badColor : '#FFFFFF'}}/>
                </ListItem>
                <ListItem button>
                    <More />
                </ListItem>
            </List>
        );
    }
}

const MehFace = () => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="#000000" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5M16,14V16H8V14H16Z" />
        </svg>
    )
};

const mapStateToProps = state => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMoodCheck: (meal, moodId) => dispatch({type: CHECK_MOOD, path: [meal, moodId]})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RateStrip);