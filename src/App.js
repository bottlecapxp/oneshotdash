import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Lot_Management from './Pages/Lot_management';
import Notifications from './Pages/notifications';
import Profile from './Pages/Profile'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <Switch> 
        <Route path="/" exact component={Dashboard} />
        <Route path="/lot-management" exact component={Lot_Management} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
