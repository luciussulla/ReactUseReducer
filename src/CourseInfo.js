import React from 'react';

const CourseInfo = ({id, onClickDispatchHandler, text}) => {
  // onclickHandler is really dispatch function 
  const handleOnclick = () => {
    onClickDispatchHandler({
      id,
      type: 'REMOVE',
    }) 
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleOnclick}>Usun kurs</button>
    </div>
  );
}

export default CourseInfo; 