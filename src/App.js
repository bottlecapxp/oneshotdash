import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Lot_Management from './Pages/Lot_management';
import Notifications from './Pages/notifications';

function App() {
  return (
    <Router> 
      <Switch> 
        <Route path="/" exact component={Dashboard} />
        <Route path="/lot-management" exact component={Lot_Management} />
        <Route path="/notifications" exact component={Notifications} />
      </Switch>
    </Router>
  );
}

export default App;
