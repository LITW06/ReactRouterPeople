import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
import PersonForm from './PersonForm';


class AddPersonPage extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: ''
    }

    onInputChange = e => {
        const nextState = produce(this.state, draft => {
            draft[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmit = () => {
        axios.post('/api/people/add', this.state).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        const { firstName, lastName, age} = this.state;
        return (<PersonForm 
            firstName={firstName} 
            lastName={lastName} 
            age={age}
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            />);
    }
}

export default AddPersonPage;


