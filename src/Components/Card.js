import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) =>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(props.course.id)){
            //This means that this course is already liked and now you have to dislike it.
            setLikedCourses((prev) => prev.filter((cid)=> (cid!== props.course.id) ) );
            /*The above line show cases that pick the previous state of the likedcourses array
            then filter it that is create a new array with new values in the likedCourses
            expext the current course id.*/
            toast.warning("Liked Removed");
        }
        else{
            //The course is Disliked and now you have to like it.
            if(likedCourses.length===0){
                //Starting mai empty tha!!
                setLikedCourses([props.course.id]);
                toast.success("Liked Successfully")
            }
            else{
                /*Agar phele se empty nhi hai to prev wala to jayega sath mai current course
                ki id nhi jayegi.*/
                setLikedCourses((prev) => [...prev,props.course.id]);
                toast.success("Liked Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }

    }
    return(
        <div className='bg-slate-600 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

            <div className='relative '>
                <img src={course.image.url} alt={course.image.alt}></img>

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button>
                        {
                            likedCourses.includes(props.course.id) ? (<FcLike fontSize={30} onClick={clickHandler}></FcLike>) : (<FcLikePlaceholder fontSize={30} onClick={clickHandler}></FcLikePlaceholder>)
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>
                    {course.title}
                </p>

                <p className='mt-2 text-white'>
                    {course.description.length > 100 ? (course.description.substr(0,100)) + '......' : (course.description) }
                </p>
            </div>



        </div>
    );
}


export default Card;