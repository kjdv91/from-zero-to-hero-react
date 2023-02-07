
import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  

  const handleChange =(event)=>{
    setNewTask(event.target.value);
  }

  const addTask =()=>{
    const task = {
      id: todoList.length ===0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName : newTask
    }
    const newTodoList = [...todoList, task]; //add array 
    setTodoList(newTodoList);
  }

  const removeTask =(id) =>{
    const newTodoList = todoList.filter((task) =>{
      if (task.id === id){
        return false;
      }else{
        return true;
      }
    
    });
    setTodoList(newTodoList);
    // setTodoList(todoList.filter((task) => task.id !==id)) eliminar optimixado; 
  };
    
    

  

  const updateTask =(id) =>{
    
  }
  
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
       
        <button onClick={addTask}>Add Task</button>
       
        {/* sintax function with params */}
        
       
        
       
      </div>
      <div className="list">
        {todoList.map((task) =>{
          return(
            <div>
               <h1>{task.taskName}</h1>
               <button onClick={() => removeTask(task.id)}>Eliminar</button> 
               <button onClick={() => updateTask(task)}>Editar</button> 
            </div>
           )
          
        })}
      </div>
    </div>
  );
}

export default App;
