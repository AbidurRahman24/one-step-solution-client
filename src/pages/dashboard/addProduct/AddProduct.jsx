import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            window.location.reload(); 
        } )

    };
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <MDBInput wrapperClass='mb-4' className='mb-2' placeholder='name' {...register("Name", { required: true})} />
                <MDBInput wrapperClass='mb-4' placeholder='description' {...register("description",)} />
                <MDBInput wrapperClass='mb-4' className='mb-2' placeholder='price' type="number" {...register("price", )} />
                <MDBInput wrapperClass='mb-4' className='mb-2' placeholder='MaxQuantity' type="number" {...register("max",)} />
                <input wrapperClass='mb-4'ut className='mb-2' placeholder='image url' type="text" {...register("image",)} />
                <MDBBtn  className='mb-2' type="submit" value='Add Product' >Add Product </MDBBtn>
            </form>
        </MDBContainer>
    );
};

export default AddProduct;