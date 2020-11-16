
import { LoginPage } from './components/LoginPage';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import { Flights } from './components/Flights';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path='/'>
              <LoginPage/>
            </Route>
            <PrivateRoute path='/flights'>
              <Flights/>
            </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
