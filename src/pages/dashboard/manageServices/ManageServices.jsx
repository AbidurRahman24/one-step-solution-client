import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SideBar from '../../shared/sidebar/SideBar';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const ManageServices = () => {
    const [product, setProduct] = useServices() //custom hook
    console.log(product);
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
        <Row style={{height:'600px'}}>
        <Col sm={3}>
            <SideBar></SideBar>
        </Col>
        <Col sm={9} responsive style={{color:'#fff'}}>
            <h3>This is ManageServices</h3>
        <MDBTable responsive style={{color:'#fff'}} >
            <MDBTableHead>
            <tr>
          <th scope='col'>No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Price</th>
          <th scope='col'>Max</th>
          <th scope='col'>Cancel</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody>
            {
                product.map(product => 
                     <tr>
          <th scope='row'>{product._id}</th>
          <td>{product.Name} </td>
          <td>{product.description.slice(0, 50)+'...'} </td>
          <td>{product.price} </td>
          <td>{product.max} </td>
          <td> <FontAwesomeIcon icon={faDeleteLeft} onClick={() =>handleDelete(product._id)}/></td>
                    
        </tr>
                )
            }
            </MDBTableBody>
        </MDBTable>
        </Col>
      </Row>
    );
};

export default ManageServices;