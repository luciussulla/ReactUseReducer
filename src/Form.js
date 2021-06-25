import React, {useState} from 'react'

const Form = ({addHandler})=> {
  const [inputData, setInputData] = useState('')
  const handleOnchange = (e)=> {
    setInputData(e.target.value)
  }

  const handleOnClick = (e)=> {
    const course = {
      id: Math.floor(Math.random()*1000),
      text: inputData
    }
    addHandler({type: "ADD", course})
    setInputData('')
  }

  return (
    <div>
       <input type="text" onChange={handleOnchange} value={inputData}/>
       <button onClick={handleOnClick}>Add Course</button>
    </div>
  )
 
}

export default Form