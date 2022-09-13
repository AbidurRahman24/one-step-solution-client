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
            console.log(result);
        } )

    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description",)} />
                <input className='mb-2' placeholder='price' type="number" {...register("price", { min: 18, max: 99 })} />
                <input className='mb-2' placeholder='minQuantity' type="number" {...register("min",)} />
                <input className='mb-2' placeholder='MaxQuantity' type="number" {...register("max",)} />
                <input className='mb-2' placeholder='image' type="text" {...register("image",)} />
                <input className='mb-2' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;