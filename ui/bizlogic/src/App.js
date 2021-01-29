
import './App.css';
import login from './components/login';
import view from './components/view';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function App() {
  return (
    <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className = "nav-item">
      <Link to={'/login'}>Login</Link>
      </ul>
      </nav>


 <Switch>
   <Route path = '/login' component = {login} />
   <Route path = '/view' component = {view} />
 </Switch>

    </Router>
  );
}

export default App;
