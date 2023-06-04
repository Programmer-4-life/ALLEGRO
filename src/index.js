import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home';
import ProptertyDetails from './components/property-details';
import Propterty from './components/property';
import About from './components/about';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import AddProperty from './components/add-property';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Loader from "./components/loader/loader"

class Root extends Component {
    state = {
        isLoading: true
      };
    
      componentDidMount() {
        // Simulating an API call delay
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
      }

    render() {
        const { isLoading } = this.state;

        return(
            <div>
                {isLoading ? (
                    <Loader loading={isLoading} />
                ) : (
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route  path="/property-details" component={ProptertyDetails} />
                        <Route  path="/property" component={Propterty} />
                        <Route  path="/about" component={About} />
                        <Route  path="/sign-in" component={SignIn} />
                        <Route  path="/sign-up" component={SignUp} />
                        <Route  path="/add-property" component={AddProperty} />
                        <Route  path="/contact" component={Contact} />
                        <Route  path="/blog" component={Blog} />
	                    <Route  path="/blog-details" component={BlogDetails} />
	                </Switch>
	                </div>
                </HashRouter>
                )}
            </div>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('allergo'));
