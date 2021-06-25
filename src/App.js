import React, {useEffect, useState, useReducer} from 'react'

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
      return;
    case 'FETCH': 
      return; 
    default: 
      throw new Error("something went wrong")
  }
}


const App = ()=> {
  return (
    <div className="App">

    </div>
  );
}

export default App;