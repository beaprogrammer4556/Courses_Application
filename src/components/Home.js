import React, {useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function Home() {
	useEffect(()=>{
		document.title="Home || Saikat";
	   },[]);
  return (
    
    <div class="container-fluid bg-light p-5">
	  <h1 className='display-4'>Mini Project</h1>
	  <p class="lead">This is developed by saikat for practising purspose.Here backend is on springboot and frontend is on reactjs.</p>
	  <Container>
	  <Button variant='outline-primary' >Learn more</Button>
      </Container>
	</div>
  )
}

export default Home