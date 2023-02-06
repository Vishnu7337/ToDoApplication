import ListTodo from "./TodoList"
import { useState } from "react"

const TodoForm=()=>{

    const [task,setTask]=useState("")

    const changeHandler=(e)=>{
        setTask(e.target.value)
    }
    
    const [todo,setTodo]=useState([])

    const submitHandler=(e)=>{
        e.preventDefault();
       const   newTodo=[[...todo,task]]
        setTodo(newTodo)
        setTask("")
    }

    const deleteHandler=(indexvalue)=>{
        const newTodo=todo.filter((todo,index)=>index!==indexvalue)
        setTodo(newTodo)
    }

    return(<>
    

    <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <ListTodo todolist={todo} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>

    
    </>)
}
export default TodoForm;
