import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Time from './components/HW-7.1/Time '
import Highlight from './components/HW-7.2/Highlight'
import Aggregation from './components/HW-7.3/Aggregation'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ Time } />
          <Route path="/second" component={ Highlight } />
          <Route path="/third" component={ Aggregation } />
        </div>
      </div>
    </Router>
  );
}

export default App;
