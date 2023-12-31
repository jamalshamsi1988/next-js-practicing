
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const[todos , setTodos]=useState([]);
  const[todo , setTodo]=useState([]);
  const[id , setId]=useState("");
  const[title , setTitle]=useState("");

  useEffect(()=>{
    async function fetchData(){
        const res = await fetch("/api/todos")
        const data = await res.json();

        setTodos(data);
        // console.log(data)
    }
    fetchData()
  },[]);

    const clickHandler = async() =>{
      const res=fetch("/api/todos",{
        method : "POST",
        body : JSON.stringify({todo}),
        headers : {'Content-Type' : 'application/json'},
      });
      const data = (await res).json();
      setTodos(data.data)
      // console.log(data)
    }

    const deleteHandler =async ()=>{
      const res=fetch('/api/todos',{
        method : "DELETE",
      })
      const data = (await res).json();
      setTodos(data.data);
      // console.log(data)
    }

    const replaceHandler = async ()=>{
      const res= await fetch("/api/todos",{
        method :"PUT",
        body :JSON.stringify([
          {id:7 , title : "todod 7"},
        {id:8 , title : "todod 8"},
      ]),
      headers : {"Content-Type" : "application/json"},
      });
      const data =await res.json();
      setTodos(data.data);
      // console.log(data)
    }

    const editHandler= async ()=>{
      const res = await fetch(`/api/todos/${id}`,{
        method : "PATCH",
        body : JSON.stringify({title}),
        headers :{"Content-Type" : "application/json"},
      });
      const data = await res.json();
      setTodos(data);
      
    }

  return (
    <div className={styles.container}>
     <h1>To Do's Page</h1>
     <ul>
      {
        todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))
      }
     </ul>
        <div>
          <input value={todo} onChange={(e)=> setTodo(e.target.value)}/>
          <button onClick={clickHandler}>Add New To Do</button>
        </div>
        <div>
          <button onClick={deleteHandler}>Delete All</button>
        </div>
        <div>
          <button onClick={replaceHandler}>Replace All</button>
        </div>
        <div>
          <input placeholder='id' value={id} onChange={e => setId(e.target.value)} />
          <input placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={editHandler}>Edit</button>
        </div>
    </div>
  )
}
