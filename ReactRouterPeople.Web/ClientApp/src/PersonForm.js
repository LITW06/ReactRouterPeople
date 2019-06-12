import React from 'react';

const PersonForm = ({firstName, lastName, age, onInputChange, onSubmit}) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3 well">
                <input type="text" 
                name="firstName" 
                value={firstName} 
                onChange={onInputChange}
                placeholder="First Name"
                className="form-control"
                />
                <br />
                <input type="text" 
                name="lastName" 
                value={lastName} 
                onChange={onInputChange}
                placeholder="Last Name"
                className="form-control"
                />
                <br />
                <input type="text" 
                name="age" 
                value={age} 
                onChange={onInputChange}
                placeholder="Age"
                className="form-control"
                />
                <br />
                <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default PersonForm;