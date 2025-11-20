import React , {useState} from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event) {
        setNewTask(event.target.value);
        
    }

    function addtask() {
        if(newTask.trim() !==''){
        setTasks(t => [...t,newTask]);
        setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index >0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index) {
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }



    return (        
        <div classname="todolist">
            <h1>My Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder='enter a task'
                    value={newTask}
                    onChange={handleInputChange} 
                />
                <button 
                    className="addbutton" 
                    onClick={addtask}>Add Task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key="{index">
                        <span className="text">{task}</span>
                        <button
                            className="deletebutton"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="upbutton"
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="downbutton"
                            onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>


        </div>
                    
    );
}


export default TodoList;