import React from 'react'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

function Title(props) {
  const click=()=>toast.success('this is my new learning addition');
  return (

    <div>
        <h1>Hello</h1>
        <p>I am {props.name}</p>
        <p>I am from {props.address}</p>
        <Button variant="primary">Click Me</Button>
        <button style={{backgroundColor:'green',color:'white',borderRadius:'10%',margin:'10px',padding:'5px'}} onClick={click}>Try Me</button>
        <ToastContainer/>
        <hr/>
    </div>
  )
}

export default Title
