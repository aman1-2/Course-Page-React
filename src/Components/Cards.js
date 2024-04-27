import React, { useState } from "react";
import Card from './Card'

const Cards =(props) =>{
    let courses=props.courses;
    let category=props.category; //For show casing the courses of the paticular category.

    /*Write now we have all the values in the format of key and values and we have to put
    all the courses value inside a single array
    Because the map fucntion is applied only on the array.*/
    function getCourses(){
        if(category==="All"){
            let allCourses=[];

            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })

            return allCourses;
        }
        else{
            //Mai sirf specific category ka data ka array hi pass karuga...
            return courses[category];
        }
    }

    /*At the starting of the page we don't have any liked coursed so at initialization
    likedcourses is an empty array. And the reason for keeping the track of liked courses is in
    cards is because card holds the property of every courses whereas card has authirization of
    a single course.*/
    const [likedCourses,setLikedCourses] = useState([]);

    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                ))
            }
        </div>
    )
}

export default Cards;