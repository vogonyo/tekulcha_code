import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Talent from './components/Talent/Talent';
import Company from './components/Pages/Company';
import Solutions from './components/Pages/Solutions';
import Clients from './components/Pages/ClientStories';
import Contact from './components/Pages/ContactUs';
import Apply from './components/Pages/Apply';
import Faq from './components/Pages/Faq';
import Hiring from './components/Pages/Hiring';

function App() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/solutions" component={Solutions}/> 
          <Route path="/contact-us" component={Contact}/>
          <Route path="/talent" component={Talent}/>
          <Route path="/company" component={Company}/>
          <Route path="/clients" component={Clients}/>
          <Route path="/apply" component={Apply}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/hiring-process" component={Hiring}/>
          
        </Switch>    
      </Router>
    );
  }
  
  


export default App;
