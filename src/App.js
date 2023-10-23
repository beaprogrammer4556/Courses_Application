import './App.css';
import Home from './components/Home';
import Coursee from './components/Coursee';
import Courses from './components/Courses';
import Title from './components/Title';
import Addcourse from './components/Addcourse';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container>
        <Title />
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' Component={Home} exact/>
            <Route path='/view-course' Component={Courses} exact/>
            <Route path='/add-course' Component={Addcourse} exact/>
            <Route path='/about' Component={Home} exact/>
            <Route path='/contact' Component={Home} exact/>
            </Routes>
            
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
