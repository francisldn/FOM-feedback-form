import React from 'react';
import cardmachine from '../../assets/illustration-thank-you.svg';
import './thankyou.styles.css';
import {useParams} from 'react-router-dom';

const Thankyou = () => {
    const {ratings} = useParams();
    
  return (
    <div className="thankyou-box">
        <div id="card-machine">
            <img src={cardmachine} alt="card-machine"/>
        </div>
            
        <div className="select-rating-text">
            <p>{`You selected ${ratings} out of 5`}</p>
        </div>

        <div className="thank-you-text">
            <h2>Thank you!</h2>
            <p className="long-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    </div>
  )
}

export default Thankyou;