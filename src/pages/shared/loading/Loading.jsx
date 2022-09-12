import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner animation="grow" variant="secondary" />
        </div>
    );
};

export default Loading;