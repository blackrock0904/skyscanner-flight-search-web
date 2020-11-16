
import { LoginPage } from './components/LoginPage';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import { FlightsPage } from './components/FlightsPage';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path='/'>
              <LoginPage/>
            </Route>
            <PrivateRoute path='/flights'>
              <FlightsPage/>
            </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
