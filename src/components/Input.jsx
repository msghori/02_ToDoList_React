import React, { useState } from "react";

const Input = ({task, setList}) =>{
    const [inputValue, setInputValue] = useState("");

    const sendBtn =(e)=>{
        e.preventDefault();
        if(inputValue === ""){
            alert("Please enter a task");
            return;
        }
        else{
            setList([...task, inputValue]);
        console.log(inputValue);

        }
    }
    return(
        <>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task" 
            className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button
            onClick={sendBtn} 
            className="ml-2 px-8 py-3 mt-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add</button>
        </>
    )
}


export default Input;