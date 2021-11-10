import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/home">
                  <Home/>
                </Route>
                <PrivateRoute exact path="/appointment">
                  <Appointment/>
                </PrivateRoute>
                <PrivateRoute  path="/dashboard">
                  <Dashboard/>
                </PrivateRoute>
                <Route exact path="/login">
                  <Login/>
                </Route>
                <Route exact path="/register">
                  <Register/>
                </Route>     
              </Switch>
          </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
