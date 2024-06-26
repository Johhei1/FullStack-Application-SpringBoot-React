import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../Service/UserService';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        UserService.getUserById(id)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Gender: {user.gender}</p>
            <p>Birthdate: {user.birthdate}</p>
            <p>Work Address: {user.address ? user.address.work : '-'}</p>
            <p>Home Address: {user.address ? user.address.home : '-'}</p>
        </div>
    );
}

export default UserDetails;
