import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialSignUp from '../scLogin/SocialSignUp';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import './Register.css'
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
        <div style={{background: '#000', color:'#fff'}}>
            <MDBContainer  >
            <MDBRow className='g-0 align-items-center'>
            <MDBCol col='6'>
            <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <MDBRow>
            <Form onSubmit={handleCreateUser}>
            <MDBCol col='6'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <MDBInput wrapperClass='mb-4 w-40' className='inputBox'  onBlur={handleNameBlur} type="text" placeholder="Enter name" />
                </Form.Group>
                </MDBCol>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <MDBInput wrapperClass='mb-4'  onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <MDBInput wrapperClass='mb-4'  onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <MDBInput wrapperClass='mb-4'  onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <div>{error}</div>
                <MDBBtn className='w-100 mb-4' size='md' type="submit">
                    Sign Up
                </MDBBtn>
            </Form>
            <p>
                Already Have an account? <Link className='form-link' to="/login">Login</Link>
            </p>
            </MDBRow>
            </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-60 h-60 rounded-4 shadow-4 image"
            alt="" fluid/>
        </MDBCol>
            </MDBRow>
            </MDBContainer>
           
            <SocialSignUp></SocialSignUp>
        </div>
    );
};

export default Register;