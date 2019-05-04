import React from 'react';
import ArrowDatePicker from './ArrowDatePicker/ArrowDatePicker';
import './MealsView.css';
import MealsContent from './MealsContent/MealsContent';

const MealsView = () => {
  return (
    <div className="MealsView">
      <ArrowDatePicker />
      <MealsContent />
    </div>);
};

export default MealsView;