import classes from './StepCard.module.scss';
import React from 'react';

const StepCard = () => {
    return (
        <div className={classes['step-card']}>
            <div className={classes['step-card__group']}>
                <div className={classes['step-card__radio']}>
                    <span className={classes['step-card__number']}>1</span>
                </div>
                <div className={classes['step-card__text-group']}>
                    <p className={classes['step-card__label']}>STEP 1</p>
                    <p className={classes['step-card__title']}>YOUR INFO</p>
                </div>
            </div>

            <div className={classes['step-card__group']}>
                <div className={classes['step-card__radio']}>
                    <span className={classes['step-card__number']}>2</span>
                </div>
                <div className={classes['step-card__text-group']}>
                    <p className={classes['step-card__label']}>STEP 2</p>
                    <p className={classes['step-card__title']}>SELECT PLAN</p>
                </div>
            </div>

            <div className={classes['step-card__group']}>
                <div className={classes['step-card__radio']}>
                    <span className={classes['step-card__number']}>3</span>
                </div>
                <div className={classes['step-card__text-group']}>
                    <p className={classes['step-card__label']}>STEP 3</p>
                    <p className={classes['step-card__title']}>ADD-ONS</p>
                </div>
            </div>

            <div className={classes['step-card__group']}>
                <div className={classes['step-card__radio']}>
                    <span className={classes['step-card__number']}>4</span>
                </div>
                <div className={classes['step-card__text-group']}>
                    <p className={classes['step-card__label']}>STEP 4</p>
                    <p className={classes['step-card__title']}>SUMMARY</p>
                </div>
            </div>
        </div>
        
    );
}

export default StepCard;