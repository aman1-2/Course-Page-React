import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Loader from './Components/Loader';
import {toast} from 'react-toastify';
import { apiUrl,filterData } from './Data'; //Here i have tried to import the filter data and 
//apiurl present in the data and then passed this filter data to our filter component to access 
//those data.This filter data in the filter component is passed as props in the component.
//And we recieve it in the form of props only

const App = () => {

  /*Here we have used two interesting feature which is react-tostify to create few pop-ups
  and react-icon to have some awesome icons.*/

  /*Here we have initialized with the null value but if we will remove the Loader in that case
  it won't be able to store the data as null cann't be converted but we can overcome this by initializing
  the array.*/
  const [courses,setCourses] =useState(null); //Created a state variable to store the data
  //of the courses.
  const [loading,setLoading] =useState(true); //A state varible for the loader.

  const fetchData = async () => {
    //Till the time data is being called and data is coming set the loader true till that time.
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //All the data is being copied to th setCourses
      // Save data
      setCourses(output.data);

      //Now let's ay while performing this we get any tyoe of error in thet case just
      //execute catch block.
    } catch (err) {
      toast.error("Unexpected Error Occured it may be due to Poor Internet Connection.\n!!Refresh and try it again!!");
    }

    //As soon as we get the data then we have to stop the loader in that case setLoading to false.
    setLoading(false);
  };

  useEffect( ()=>{
    fetchData();
  },[]);

  /*Defining the filter section that is category section in which the the UI will diplay the
  courses according to the category being selected and by defalut at the starting of the UI
  'All' Category is being selected.*/
  const [category,setCategory] = useState(filterData[0].title);

  return (
    <div className='min-h-screen flex flex-col bg-slate-800'>

      <div className='bg-slate-800'>
        <Navbar></Navbar>
      </div>

      <div className='bg-slate-800'>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className='w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center'>
          {
            loading ? (<Loader></Loader>) : (<Cards courses={courses} category={category}></Cards>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;