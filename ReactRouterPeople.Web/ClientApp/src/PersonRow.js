import React from 'react';
import { Link } from 'react-router-dom';

export default function PersonRow({ person, onDeleteCheckChanged }) {
    return (
        <tr className={person.markedForDeletion ? 'danger' : ''}>
            <td><input checked={person.markedForDeletion} onChange={() => onDeleteCheckChanged(person)} type="checkbox" className="form-control" /></td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>
                <Link to={`/editperson/${person.id}`}>
                    <button className='btn btn-warning'>Edit</button>
                </Link>
            </td>
        </tr>
    )
}