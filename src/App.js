// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[inputText,setInputText] = useState("");
  const[inputNum,setInputNum] = useState("");
  const[listOfCourse,setListOfCourse] = useState([])
  function addCourse(){
     if(inputText == '' && inputNum == '') return alert("plsease First Add COurse and Hour");
    const obj = {
      name : inputText,
      course : parseInt(inputNum)
    }
    // const data = [...listOfCourse,obj]
    // setListOfCourse(data)
    // setInputNum("")
    // setInputText("")
    // console.log(li)
  //   const data = [...listOfCourse,obj]
  // setListOfCourse(data)
  // console.log(listOfCourse)
   
  setListOfCourse((listOfCourse)=>{
    const data =  [...listOfCourse,obj]
      setInputNum("")
      setInputText("")
    console.log(data)
    return data;
  })
  }
  function increment(index){
    // setListOfCourse(...listOfCourse,listOfCourse(course + 1))
    setListOfCourse(listOfCourse.map((elem,indx)=>{
      if(index === indx){
        return {...elem,course:elem.course + 1}
      }
      else{
        return elem;
      }
    }))
   
  }

  function decrement(index){
    setListOfCourse(listOfCourse.map((elem,indx)=>{
      if(index === indx){
        return {...elem,course:elem.course - 1}
      }
      else{
        return elem;
      }
    }))
  }

  
  return (
    <>
    <div style={{
      padding:'20px 20px',
      display:'flex',
      flexDirection:'column',
      gap:'20px',
      alignItems:'center',
      justifyContent:'center',
      
    }}>
    <div>
      <h1 style={{textAlign:'center',fontStyle:'italic',fontSize:'3rem'}}>Geekster Education Planner</h1>
    </div>
    <div className='main-container'>
      <input className='text-div' type="text" placeholder='Enter Course' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}></input>
      <input  className='text-div' type='number' placeholder='Hours' value={inputNum} onChange={(e)=>{setInputNum(e.target.value)}}></input>
      <button onClick={addCourse}  className='add-button'>Add</button>
    </div>

    {
      listOfCourse !== [] && listOfCourse.map((ele,index)=>{
        return (
          <>
          
          <div className='course-div' key={index} >
      <div className='course-style' >{ele.name}</div>
      <div className='course-style'>{ele.course}{" - "} hours </div>
      
      <button className='increment-button' onClick={()=>{
        increment(index)
      }}> Increment </button>
      <button className='decrement-button'  onClick={()=>{
        decrement(index)
      }}> Decrement </button>
      
    </div>

          </>
        )
      })
    }


    {/* <div className='course-div'>
      <div style={{border:'2px solid black',padding:'10px 10px'}}>javascript</div>
      <div style={{border:'2px solid black',padding:'10px 10px'}}>2{"-"} hours</div>
      <button style={{padding:'5px 5px'}}> Increment </button>
      <button style={{padding:'5px 5px'}}> Decrement </button>
    </div> */}
    
    </div>
    </>
  );
};

export default App;