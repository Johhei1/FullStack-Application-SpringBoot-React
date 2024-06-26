import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('M');
    const [birthdate, setBirthdate] = useState('');
    const [workAddress, setWorkAddress] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [notification, setNotification] = useState('');

    const navigate = useNavigate();

    const saveUser = (e) => {
        e.preventDefault();

        const user = { name, surname, gender, birthdate };

        UserService.createUser(user).then((response) => {
            const userId = response.data.id;

            const addressPromises = [];
            if (workAddress && homeAddress) {
                addressPromises.push(UserService.addAddress(userId, workAddress, homeAddress ));
            }

            Promise.all(addressPromises).then((responses) => {
                responses.forEach(response => {
                    console.log('Address saved:', response.data);
                });
                setNotification('User registered successfully!');
                setTimeout(() => setNotification(''), 5000);
                // navigate('/users');
            }).catch(error => {
                console.error('Error saving addresses:', error);
                setNotification('Error registering user.');
                setTimeout(() => setNotification(''), 5000);
            });
        }).catch(error => {
            console.log(error);
            setNotification('Error registering user.');
            setTimeout(() => setNotification(''), 5000);
        });
    };

    return (
        <section className="Register">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form onSubmit={saveUser}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control form-control-lg"
                                                    value={name}
                                                    placeholder="First Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="surname"
                                                    className="form-control form-control-lg"
                                                    value={surname}
                                                    placeholder="Last Name"
                                                    onChange={(e) => setSurname(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                            <div className="form-outline datepicker w-100">
                                                <input
                                                    type="date"
                                                    className="form-control form-control-lg"
                                                    id="birthdate"
                                                    value={birthdate}
                                                    onChange={(e) => setBirthdate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <h6 className="gender">Gender: </h6>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderOptions"
                                                    id="maleGender"
                                                    value="M"
                                                    checked={gender === 'M'}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderOptions"
                                                    id="femaleGender"
                                                    value="F"
                                                    checked={gender === 'F'}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="workAddress"
                                                    className="form-control form-control-lg"
                                                    value={workAddress}
                                                    placeholder="Work Address"
                                                    onChange={(e) => setWorkAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="homeAddress"
                                                    className="form-control form-control-lg"
                                                    value={homeAddress}
                                                    placeholder="Home Address"
                                                    onChange={(e) => setHomeAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                                    </div>
                                </form>
                                {notification && (
                                    <div className="alert alert-info mt-4" role="alert">
                                        {notification}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterUser;
