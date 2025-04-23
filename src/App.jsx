import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Board from './components/Board';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
    <div className='bg-gray-900 h-screen'>
        <div className="flex flex-col items-center pt-10 text-white">
          <h1 className='text-3xl font-bold mb-3'>ToDo List</h1>
          <Input task = {taskList} setList = {setTaskList}/>
        </div>
        <div className='flex flex-col items-center grid grid-cols-3 gap-4 p-4 mt-5 rounded-lg'>
            {taskList.map((task,index)=>
              <Board 
              key={index}
              index={index}
              task={task}          
              taskList={taskList}
              setTaskList={setTaskList}
              />          
            )}
        </div>        
    </div>        
    </>
  )
}

export default App
