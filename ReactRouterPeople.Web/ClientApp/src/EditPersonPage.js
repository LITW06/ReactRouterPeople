import React from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import { produce } from 'immer';

export default class EditPage extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        people: []
    }

    componentDidMount = () => {
        if (this.props.match.params.personId) {
            axios.get(`/api/people/getbyid/${this.props.match.params.personId}`)
                .then(({ data }) => {
                    this.setState({ person: data });
                });
        } else {
            axios.get('/api/people/get').then(({ data }) => {
                this.setState({ people: data });
            });
        }
    }

    onInputChange = e => {
        const nextState = produce(this.state, draft => {
            draft.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmit = () => {
        axios.post('/api/people/update', this.state.person).then(() => {
            this.props.history.push('/');
        });
    }

    onSelectChange = e => {
        const id = e.target.value;
        axios.get(`/api/people/getbyid/${id}`)
        .then(({ data }) => {
            this.setState({ person: data });
        });
    }

    render() {
        const { firstName, lastName, age } = this.state.person;
        let content;
        if (firstName) {
            content = <PersonForm
                firstName={firstName}
                lastName={lastName}
                age={age}
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
            />
        }
        else {
            content = (
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <select className="form-control" onChange={this.onSelectChange}>
                            <option value="0">-- Choose a person to edit --</option>
                            {this.state.people.map(p => <option key={p.id}
                             value={p.id}>{p.firstName + ' ' + p.lastName}</option>)}
                        </select>
                    </div>
                </div>)
        }
        return (
            <div>
                <h1>Edit person</h1>
                {content}
            </div>
        )
    }
}