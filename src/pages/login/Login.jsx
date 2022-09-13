import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialSignUp from '../scLogin/SocialSignUp';

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

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, {replace: true});
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
        <div>
            <Form onSubmit={handleUserSignIn}>
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
                {
                    loading && <p>Loading...</p>
                }
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>
                No member? <Link className='form-link' to="/register">Create an account</Link>
            </p>
            <p>Forget Password? 
            <button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }}
      >
        Reset password
      </button>

                {/* <button className='btn btn-link text-primary pe-auto text-decoration-none' 
                onClick={resetPassword}>Reset Password</button>  */}
            </p>
            <SocialSignUp></SocialSignUp>
            <ToastContainer />
        </div>
    );
};

export default Login;