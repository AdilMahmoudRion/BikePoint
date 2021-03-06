import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css'
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://rocky-springs-46684.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <div>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <button type="submit" className="Button-sec">Make Admin</button>
                </form>
                {success && <Alert severity="success">Make Admin successfully!</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;