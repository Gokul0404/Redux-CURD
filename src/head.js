import React from 'react'
import { useSelector } from 'react-redux'

export default function Head() {
  const {tasksList}=useSelector((state)=>state.tasks) //tasks store la kuduturukka key name
  return (
    <div>
      <h1 className="text-primary text-center">Task Updation</h1>
      <p>Task count ${tasksList.length}</p>
    </div>
  );
}
