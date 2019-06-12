import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPersonPage from './AddPersonPage';
import EditPersonPage from './EditPersonPage';

class App extends React.Component {
    render() {
        return (
            <div className="container" style={{marginTop: 40}}>
                <Route exact path='/' component={HomePage}/>
                <Route path='/addperson' component={AddPersonPage}/>
                <Route path='/editperson/:personId?' component={EditPersonPage}/>
            </div>);
    }
}

export default App;