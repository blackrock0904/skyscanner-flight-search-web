import BGD from './flight_info.png';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from'react-router-dom';
import { Flights } from './components/Flights';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div style={styles.background}>
    <div style={styles.container}>
      <Router>
        <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <PrivateRoute path='/flights'>
              <Flights/>
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

const styles = {
  background:{
    background: `url(${BGD})`,
    // background: rgba(f,f,f,0.6),
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    // opacity: .6,
  },
  container:{
    background: 'rgba(255, 255, 255, 0.6)',
    width: '100%',
    minHeight: '100%'
  }
}

export default App;
