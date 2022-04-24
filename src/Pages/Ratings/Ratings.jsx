import React,{createRef} from 'react';
import starsvg from '../../assets/icon-star.svg';
import './ratings.styles.css';
import {useHistory} from 'react-router-dom';


const Ratings = ({ratings, setRatings, setAlert}) => {
    const ratingRef = createRef();
    let history = useHistory();

    const selectRating = (e) => {
        const selectedRating = e.target.innerText;
        setRatings(selectedRating);
        const n = ratingRef.current.children.length
        for (let i=0; i<n; i++) {
            if (i === selectedRating-1) {
                ratingRef.current.children[i].style.cssText += "background-color:var(--orange-color); color:white"
            } else {
                ratingRef.current.children[i].style.cssText += "background-color:var(--darkblue-color); color:var(--lightgrey-color)"
            }
        }
    }

    const handleSubmit= () => {
        ratings === 0 && setAlert({
            open: true,
            message: "Please submit a rating.",
            type: 'error'
        });
        ratings>0 && history.push('/thankyou/'+ratings)
    }


    return (
        <div className="feedback-box">
            <div>
            <div id="star">
                <img src={starsvg} alt="star"/>
            </div>
            </div>
            
            <div className="text">
            <h2 className="title">How did we do?</h2>
            <p className="question">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>

            <div className="ratings" ref={ratingRef}>
                {[1,2,3,4,5].map((i) => 
                    (<div className="rating" 
                        key={i} 
                        onClick={(e) => selectRating(e)}
                    >{i}</div>))
                }
            </div>
            
            <div className="submit-btn">
                <button className="btn" onClick={handleSubmit}>
                    SUBMIT
                </button> 
            </div>
        </div>
    )
}

export default Ratings