import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
 
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import base_url from '../api/bootapi';
const Coursee = ({props,update}) => {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("course deleted");
        update(id);
      },
      (error)=>{
         toast.error("course not deleted !! server problem");
      }     
    )
  };
  return (
    <Card>
        <CardBody>
            <CardSubtitle style={{fontWeight:'bold'}}>{props.subtitle}</CardSubtitle>
            <CardText>{props.text}</CardText>
            <Container>
            <Button color='danger' onClick={()=>{
              deleteCourse(props.id);
            }}>Delete</Button>
            <Button style={{marginLeft:'8px'}} color='warning'>Update</Button>
            </Container>
            
        </CardBody> 
    </Card>
  )
}

export default Coursee

