import React, { useState, useEffect } from 'react';
import './MyProfilePage.css';

const MyProfilePage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [user, setUser]= useState({})

    useEffect(() => {
        const storedUser = sessionStorage.getItem("userData");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
    useEffect(() => {
        if (user && user.patientId) {
            fetch(`http://localhost:8081/api/patients/${user.patientId}`)
                .then(response => response.json())
                .then(data => {
                    setUserDetails(data);
                    setFormData({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        address: data.address,
                        dob: data.dob,
                        gender: data.gender,
                        phoneNumber: data.phoneNumber,
                        // Add additional fields here
                    });
                })
                .catch(error => console.error('Error fetching user details:', error));
        }
    }, [user && user.patientId]);
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        // Submit the form data to the backend
        fetch(`http://localhost:8081/api/update/${userDetails.patientId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data updated successfully:', data);
                setEditing(false);
            })
            .catch(error => console.error('Error updating user details:', error));
    };
    

    return (
        <div>
            <nav className="navbar">
                <h1>My Profile</h1>
            </nav>
            <div className="profile-details">
                {userDetails ? (
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="text"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <input
                                type="text"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                readOnly={!editing}
                            />
                        </div>
                    </form>
                ) : (
                    <p>Loading...</p>
                )}
                {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
                {editing && <button type="button" onClick={handleSubmit}>Save</button>}
            </div>
        </div>
    );
};

export default MyProfilePage;
