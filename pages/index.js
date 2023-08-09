
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const[todos , setTodos]=useState([]);
  const[todo , setTodo]=useState("");

  useEffect(()=>{
    async function fetchData(){
        const res = await fetch("/api/todos");
        const data = await res.json();

        setTodos(data);
        console.log(data)
    }
    fetchData()
  },[])
    const clickHandler = async() =>{
      const res = fetch("/api/todos" , {
        method :"POST",
        body : JSON.stringify({todo}),
        headers : {'Content-type': 'application/json'} ,
      });
      const data= await res.json();
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
    </div>
  )
}
