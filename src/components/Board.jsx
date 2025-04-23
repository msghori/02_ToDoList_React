import React from "react";

const Board = ({task,index, taskList, setTaskList}) =>{
    
    const deleteTask = () =>{
        // let removeIndex = taskList.indexOf(task);
        // taskList.splice(removeIndex, 1);
        // setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)));

        const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
    
    }
    return(
        <div className="max-w-md flex flex-col justify-center text-center bg-gray-100 text-dark rounded-lg shadow-md p-4 mb-4">
            <p className="text-dark">{task}</p>
            <button 
            onClick={deleteTask}
            className="bg-red-500 max-w-20 mx-auto mt-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
    )
}

export default Board;