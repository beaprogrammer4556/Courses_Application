import React, { useEffect, useState } from 'react'
import Coursee from './Coursee'
import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast } from 'react-toastify';

const Courses =()=> {

   useEffect(()=>{
    document.title="All Courses || Saikat";
   },[]);

  //  function to call server
   const getAllCoursesFromServer =()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
          console.log(response.data);
          toast.success("courses has been loaded",{
            position: "bottom-center"
          });
          Setcourses(response.data);
      },
      (error)=>{
        console.log(error);
        toast.error("something went wrong",{
          position: "bottom-center"
        });
      }
    );
   };

   useEffect(()=>{
    getAllCoursesFromServer();
   },[]);

    const [course,Setcourses]=useState([]);
    
    const updateCourses = (id)=>{
      Setcourses(course.filter((c)=> c.id != id))
    };

  return (
    <div>
      <h1>All Course</h1>
      <p>List of courses are as follows</p>

   {course.length > 0
   ? course.map((course)=><Coursee key={course.id}  props={course} update={updateCourses}/>)
     :"No courses are currently available"
   }
    </div>
  )
}

export default Courses