import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../Service/UserService';

function DisplayUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        UserService.getAllUsers()
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else if (response.data && response.data.users) {
                    setUsers(response.data.users);
                } else if (response.data && typeof response.data === 'object') {
                    setUsers([response.data]);
                } else {
                    console.log("Unexpected response structure:", response.data);
                }
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    };

    const deleteUser = (userId) => {
        UserService.deleteUser(userId)
            .then(() => {
                getAllUsers();
            })
            .catch(error => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <div className="container">
            <h2 className="display-4">List Users</h2>
            <Link to="/register" className="btn btn-primary mb-2">Add User</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th className='fields'>User Id</th>
                        <th className='fields'>First Name</th>
                        <th className='fields'>Last Name</th>
                        <th className='fields'>Birth Date</th>
                        <th className='fields'>Home Address</th>
                        <th className='fields'>Work Address</th>
                        <th className='fields'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className='fields'>{user.id}</td>
                            <td className='fields'>{user.name}</td>
                            <td className='fields'>{user.surname}</td>
                            <td className='fields'>{user.birthdate}</td>
                            <td className='fields'>{user.address ? user.address.home : '-'}</td>
                            <td className='fields'>{user.address ? user.address.work : '-'}</td>
                            <td className='fields'>
                                <Link className="btn btn-info" to={`/users/${user.id}`}>View</Link>
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)} style={{ marginLeft: "10px" }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayUsers;
