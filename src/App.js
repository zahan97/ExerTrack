import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Homepage from "./components/homepage.component";
import cf from "./components/contactform.component";

function App() {
  return (
    <Router>
      <div>
      <Route path="/" exact component={Homepage} />
      <Route path="/contact" exact component={cf} />
      
    
      <Route path="/main" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      
      </div>
    
    </Router>
  );
}

export default App;