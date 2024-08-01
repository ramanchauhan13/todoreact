import React from 'react'

function TaskLists(props) {
    const {value, index,deleteTask,id} = props;
  return (
        <div className='listBox'>
        <button className='button2' onClick={()=>{deleteTask(id)}}> X </button>
        <li key={index}>
        {value}
        </li>
        </div>
  )
}

export default TaskLists
