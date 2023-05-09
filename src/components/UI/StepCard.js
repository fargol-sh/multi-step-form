import classes from './StepCard.module.scss';
import React from 'react';

const StepCard = () => {
    return (
        <div className={classes['step-card']}>
            <div className={classes['step-card__group']}>
                <span>1</span>
                <div>
                    <p>STEP 1</p>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div className={classes['step-card__group']}>
                <span>2</span>
                <div>
                    <p>STEP 2</p>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div className={classes['step-card__group']}>
                <span>3</span>
                <div>
                    <p>STEP 3</p>
                    <p>ADD ONS</p>
                </div>
            </div>
            <div className={classes['step-card__group']}>
                <span>4</span>
                <div>
                    <p>STEP 4</p>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
        
    );
}

export default StepCard;