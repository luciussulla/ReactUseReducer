import React, {useEffect, useState, useReducer} from 'react'
import CourseInfo from './CourseInfo';
import Form from './Form'
const courses = [
  {
  id:1, 
  text: "something", 
  }, 
  {
    id:2, 
    text: "blabla",
  },
  {
    id:3, 
    text: "number 3blabla",
  }
]


const coursesReducer = (state, action)=> {
  switch(action.type) {
    case 'ADD': 
      return ;
    case 'REMOVE': 
      return state.filter(course=> course.id !== action.id)
    case 'FETCH': 
      return; 
    default: 
      throw new Error("something went wrong")
  }
}

const fetchAsyncData = async () => {
  await new Promise(resolve => setTimeout(resolve,3000))
}

const App = ()=> {
  const [state, dispatch] = useReducer(coursesReducer, courses)

  const coursesElements = state.map(course=> (
    <CourseInfo key={course.id} onClickDispatchHandler={dispatch} {...course}/>
  ))

  useEffect(()=> {

  },[])

  return (
    <div className="App">
      {coursesElements}
      <Form addHandler={dispatch}/>
    </div>
  );
}

export default App;