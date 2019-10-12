import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyles.css';

const CardUI = props => {
    return(
        <div className="cardui card text-center shadow my-2">
            <div className="img-overflow">
                <img className="card-img-top img_style" src={props.src} alt="Human writing sophisticated software"/>
            </div>
            <div className="cardui-body card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary card-description">
                    {props.description}
                </p>
                <Link to={`/${props.link}`} className="btn">{props.button}</Link>
            </div>
        </div>
    );
}

export default CardUI;
