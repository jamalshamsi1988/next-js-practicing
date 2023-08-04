
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const[todos , setTodos]=useState([]);

  useEffect(()=>{
    async function fetchData(){
        const res = await fetch("/api/todos");
        const data = await res.json();

        setTodos(data);
        console.log(data)
    }
    fetchData()
  },[])
  return (
    <div className={styles.container}>
     <h1>To Do's Page</h1>
     <ul>
      {
        todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))
      }
     </ul>

    </div>
  )
}
