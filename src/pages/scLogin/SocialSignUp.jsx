import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/loading/Loading';
import './Social.css'
const SocialSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, {replace: true});
    }

    return (
        <div >
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='social-button'>
                <MDBBtn 
                    onClick={() => signInWithGoogle()}
                    className="mb-4 w-50"
                    size="lg" style={{backgroundColor: '#dd4b39'}}>
                        <FontAwesomeIcon icon="fa-brands fa-google"  className="mx-2"/>
                        Continue wiht google
                </MDBBtn>
                <br />
                <MDBBtn className="mb-4 w-50" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Continue with facebook
                </MDBBtn>
                <br />
                <MDBBtn size="lg" style={{ backgroundColor: '#000' }}
                    onClick={() => signInWithGithub()}
                    className='mb-4 w-50'>
                    <img style={{ width: '30px' }}  alt="" />
                    Continue with github
                </MDBBtn>
            </div>
        </div>
    );
};

export default SocialSignUp;