import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import CoursePopup from './Components/CoursePopup/CoursePopup';
import './CourseCard.css';


function CourseCard(props) {

    const [state, setstate] = useState({showPopup:false});

    const difficultyClass = ["font-lg"]
    difficultyClass.push(props.diffClass);

    let coursePopup =  state.showPopup===true ? (<CoursePopup courseType={props.courseType}/>) : null;

   
    const openCourseCurriculumPopup = ()=>{
          setstate({showPopup : !state.showPopup})
    }

    
    return (

            
            <div>
            
            {coursePopup}

                <div className="single-course-card-cointainer">
                
                    <div style={{background:props.background,boxShadow:props.backgroundShadow}} className="inner-course-card-cointainer">

                        <h6 className="course-card-difficulity-name"> {props.difficulityType} </h6> 
                        <h4 style={{padding:'10px 3px'}}> {props.courseName} </h4> 

                    </div>
                        
                    <div className="course-card-instructor-cointainer">
                        <div  style={{background:props.background,boxShadow:props.backgroundShadow}} className="course-card-explore-btn" onClick={openCourseCurriculumPopup}> Explore </div>
                        <Avatar alt={props.courseName} src={props.courseInstImg} />
                        <h6> Instructor </h6>
                        <h5 className="course-card-instructor-name">{props.InstName}</h5>
                    </div>
                </div>

            </div>
    )
}

export default CourseCard
