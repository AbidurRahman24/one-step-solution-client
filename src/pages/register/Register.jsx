import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialSignUp from '../scLogin/SocialSignUp';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate = useNavigate();
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event => {
        // console.log(event);
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/');
    }
    return (
        <div className={{ width: "200px" }}>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div>{error}</div>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>
                Already Have an account? <Link className='form-link' to="/login">Login</Link>
            </p>
            <SocialSignUp></SocialSignUp>
        </div>
    );
};

export default Register;