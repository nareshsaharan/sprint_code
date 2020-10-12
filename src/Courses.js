import React from 'react';
import CourseCard from './CourseCard';
import './CourseCard.css';
import CourseCardData from './CourseCardData';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: '#fff',
    padding: '30px',
    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)'
  },
  green: {
    color: '#fff',
    padding: '30px',
    background: 'linear-gradient(60deg, #66bb6a, #43a047)',
    boxShadow:'0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)'
  },
  blue:{
    color: '#fff',
    padding: '30px',
    background:'linear-gradient(60deg, #20304b, #243b55)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(32, 48, 75,.4)'
  },
}));


export default function Courses(props) {

  const classes = useStyles();

let Fundamental=null;
let Intermediate=null;
let Advanced = null;
 

Fundamental = CourseCardData.Fundamental.map((course,index)=>{
        return (
            <CourseCard
                courseName = {course.courseName}
                courseInstImg = {course.instImg}
                InstName = {course.instName}
                difficulityType = {course.difficulity}
                courseType = {course.courseType}
                key={index}
                background={course.background}
                backgroundShadow ={course.boxShadow}
                />
        )
})

Intermediate = CourseCardData.Intermediate.map((course,index)=>{
  return (
      <CourseCard
          courseName = {course.courseName}
          courseInstImg = {course.instImg}
          InstName = {course.instName}
          difficulityType = {course.difficulity}
          courseType = {course.courseType}
          key={index}
          background={course.background}
          backgroundShadow ={course.boxShadow}
          />
  )
})

Advanced = CourseCardData.Advanced.map((course,index)=>{
  return (
      <CourseCard
          courseName = {course.courseName}
          courseInstImg = {course.instImg}
          InstName = {course.instName}
          difficulityType = {course.difficulity}
          courseType = {course.courseType}
          key={index}
          background={course.background}
          backgroundShadow ={course.boxShadow}
          />
  )
})

  return(

    <div className="course-card-display">

            <div className="course-module-cointainer">
               <div className="course-module-icon-div">
               <Avatar variant="rounded" className={classes.green}>
                  <AssignmentIcon style={{size:'10'}}/>
               </Avatar>
              
              </div>

              <div className="course-module-inner-heading">
                  <h5> Fundamental Courses </h5>
              </div>

           </div>

        <div className="course-card-cointainer">
            {Fundamental}
        </div>


        <div className="course-module-cointainer">
               <div className="course-module-icon-div">
               <Avatar variant="rounded" className={classes.orange}>
               <AssignmentIcon style={{size:'10'}}/>
             </Avatar>
              
              </div>

              <div className="course-module-inner-heading">
              <h5> Intermediate Courses </h5>
              </div>

          </div>

        <div className="course-card-cointainer">
            {Intermediate}
        </div>
   
        <div className="course-module-cointainer">
               <div className="course-module-icon-div">
               <Avatar variant="rounded" className={classes.blue}>
               <AssignmentIcon style={{size:'10'}}/>
             </Avatar>
              
              </div>

              <div className="course-module-inner-heading">
              <h5> Advanced Courses </h5>
              </div>

          </div>

        <div className="course-card-cointainer">
            {Advanced}
        </div>



    </div>
        
  );
}
