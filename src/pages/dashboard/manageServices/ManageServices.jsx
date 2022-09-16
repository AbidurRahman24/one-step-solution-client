import React from 'react';
import useServices from '../../../hooks/useServices';

const ManageServices = () => {
    const [product, setProduct] = useServices() //custom hook
    // console.log(product);
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                // console.log(product);
                const remaining = product.filter(product => product._id !== id)
                setProduct(remaining)
            })
        }
    }
    return (
        <div>
            <h3>This is ManageServices</h3>
            {
                product.map(product => <div key={product._id}>
                    <h4>{product.Name} <button onClick={() =>handleDelete(product._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;