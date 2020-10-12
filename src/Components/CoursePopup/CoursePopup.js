import React, { useState } from 'react';
import './CoursePopup.css';
import CurriculumCard  from './CurriculumCard';
import CourseData from './CourseData';




function CoursePopup(props) {

    
const [backGroundState, setBackGroundState] = useState(["course-curriculum-popup-backgroud"])
const[curriculumState, setcurriculumState] = useState(["course-curriculum-popup-cointainer"])

let WeekStructure  = null;
    switch (props.courseType){
        case ('CppFoundation'):
            WeekStructure = CourseData.CppFoundation.week;
            break;
        case ('JavaFoundation'):
            WeekStructure = CourseData.JavaFoundation.week;
            break;
        case('PythonFoundation'):
            WeekStructure = CourseData.PythonFoundation.week;
            break;
        case('WebDevFoundation'):
            WeekStructure = CourseData.WebDevFrontend.week;
            break;
        case ('PythonDataStructure'):
            WeekStructure = CourseData.PythonDataStructure.week;
            break;
        case ('JavaDataStructure'):
            WeekStructure = CourseData.JavaDataStructure.week;
            break;
        case('CppDataStructure'):
            WeekStructure = CourseData.CppDataStructure.week;
            break;
        case('WebDevReact'):
            WeekStructure = CourseData.WebDevFrontendReact.week;
            break;
        case ('MachineLearning'):
            WeekStructure = CourseData.MachineLearning.week;
            break;
        case('DataScience'):
            WeekStructure = CourseData.DataScience.week;
            break;
        default:
            WeekStructure = null;
    }

let card=null;
 
    card = WeekStructure.map((week,index)=>{
            return (
                <CurriculumCard
                    CurriculumItems = {week.day}
                    week = {index+1}
                    heading = {week.weakTarget}
                    key={index}
                    />
            )
    })
   
   
    const closePopUp=()=>{
     
        setBackGroundState(["course-curriculum-popup-backgroud","close-popup"])     

        setcurriculumState(["course-curriculum-popup-cointainer","close-popup"])
    }
  
    return (
        <div>
            <div className={backGroundState.join(' ')}  onClick={()=> closePopUp()}> </div>

            <div className={curriculumState.join(' ')} >
                <div style={{marginBottom:"10px"}}> Course Curriculum </div>
                <div className="week-cointainer">
                { card }
                </div>
                
            </div>
            
        </div>
    )
}

export default CoursePopup
