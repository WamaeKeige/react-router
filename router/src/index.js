import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Topics from './Topics';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div>
   <Route exact path="/" component={App}/>
   <Route path="/about" component={About}/>
   <Route path="/topics" component={Topics}/>
   <Route path="/never" component={()=>(<div>Never hit :(</div>)} />
   <Route path="*" component={()=>(<div>NoMatch</div>)} />
   </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
