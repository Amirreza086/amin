import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Truth from './components/Truth/Truth';
import WhyItMatters from './components/WhyItMatters/WhyItMatters';
import TakeAction from './components/TakeAction/TakeAction';
import Resources from './components/Resources/Resources';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/truth" component={Truth} />
                    <Route path="/why-it-matters" component={WhyItMatters} />
                    <Route path="/take-action" component={TakeAction} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App; 