import React,{useState} from 'react';
import Ratings from './Pages/Ratings/Ratings';
import Thankyou from './Pages/Thankyou/Thankyou';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [ratings, setRatings] = useState(0)
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "error",
  })

  
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Ratings ratings={ratings} setRatings = {setRatings} setAlert={setAlert}/>
          </Route>
          <Route exact path="/thankyou/:ratings">
            <Thankyou ratings={ratings}/>
          </Route>
        </Switch>
      </div>
      <Alert alert={alert} setAlert={setAlert}/>
    </Router>
  );
}

export default App;
