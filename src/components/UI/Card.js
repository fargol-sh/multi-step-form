import React from 'react';
import classes from './Card.module.scss';
import StepCard from './StepCard';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <StepCard />
        </div>
    );
}

export default Card;