import React, {useEffect, Fragment, useState } from 'react'
import { Button, Container, FormGroup, Input, Label,Form } from 'reactstrap'
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
function Addcourse() {
  useEffect(()=>{
		document.title="AddCourses || Saikat";
	   },[]);

     const[course, setCourse]=useState({});

     const handleFrom=(e)=>{
      console.log(course);
      postDatatoServer(course);
      e.preventDefault();
     }

     //creating function to post data on server
     const postDatatoServer=(data)=>{
       axios.post(`${base_url}/courses`,data).then(
        (response)=>{
           console.log(response);
           console.log("success")
           toast.success("Course added sucessfully");
           setCourse({})
        },(error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error ! Something went wrong");
        }
       )
     }
  return (
    <Fragment>
      <h3>Fill Couse Detail</h3>
        <Form onSubmit={handleFrom}>
        <FormGroup>
          <label for="userId" className='text-left'>Course Id</label>
          <Input type="text" name="userId" id="userId" placeholder="Enter a coursename" 
           onChange={(e)=>{
            setCourse({...course, id:e.target.value});
          }}/>
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter a title here" id='title'
          onChange={(e)=>{
            setCourse({...course, title:e.target.value});
          }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input type="textarea" placeholder="Enter a description" id='description'
          onChange={(e)=>{
            setCourse({...course, description:e.target.value});
          }}
          />
        </FormGroup>
        <Container className='text-center'>
          <Button type="submit" color='success'>Add Course</Button>
          <Button color='warning' style={{marginLeft:8}} type='reset'>Clear</Button>
        </Container>

        </Form>
    </Fragment>
  )
}

export default Addcourse