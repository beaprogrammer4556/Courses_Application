import React from 'react'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, CardText } from 'reactstrap';

function Title(props) {
  
  return (
    <Card className='my-2 bg-warning'>
      <CardBody>
        <h1 className='text-center my-2'>Welcome to Course Academy</h1>
      </CardBody>
    </Card>
  )
}

export default Title
