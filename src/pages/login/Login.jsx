import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialSignUp from '../scLogin/SocialSignUp';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        fetch('http://localhost:5000/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
    }
    if (user) {
        // navigate(from, {replace: true});
    }
    // const resetPassword = async () => {
    //     const email = setEmail(event.target.value);
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast('Sent email');
    //     }
    //     else{
    //         toast('please enter your email address');
    //     }
    // }
    return (
        <>
        <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <MDBInput className='w-50' wrapperClass='mb-4' size="lg" onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <MDBInput className='w-50' wrapperClass='mb-4' size="lg" onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                {
                    loading && <p>Loading...</p>
                }
                <MDBBtn className="mb-4 w-50" size="lg" type="submit">
                    Login
                </MDBBtn>
            </Form>
            <p>
                No member? <Link className='form-link' to="/register">Create an account</Link>
            </p>
            <p>Forget Password?
                <MDBBtn
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast('Sent email');
                    }}
                >
                    Reset password
                </MDBBtn>

                {/* <button className='btn btn-link text-primary pe-auto text-decoration-none' 
                onClick={resetPassword}>Reset Password</button>  */}
            </p>
            </MDBCol>
            <SocialSignUp></SocialSignUp>
            </MDBRow>
            </MDBContainer>
            <ToastContainer />
            </>
    );
};

export default Login;