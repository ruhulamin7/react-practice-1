import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Blog heading='My first blog' author='Ruhul'></Blog>
      <Blog heading='My second blog' author='Amin'></Blog>
      <Blog heading='My third blog' author='Polash'></Blog>

      <Todo></Todo>

    </div>
  );
}

function Blog(props) {
  const headingStyle = {
    color: "white",
    backgroundColor: 'gray',
    padding: '5px',

  }
  return (
    <article className="blog">
      <h2 style={headingStyle}>{props.heading}</h2>
      <h3>Author: {props.author}</h3>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum facilis temporibus, iste amet facere quasi, officia laudantium, fugit tempora ad molestias numquam ut quia? Veritatis harum deserunt ab officiis obcaecati? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum facilis temporibus, iste amet facere quasi, officia laudantium, fugit tempora ad molestias numquam ut quia? Veritatis harum deserunt ab officiis obcaecati?
      <p style={{ color: 'red' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt libero nulla error aspernatur minima et quasi soluta repellat eligendi. Quasi obcaecati amet molestias veniam voluptatem autem delectus repellendus ea.</p>
    </article>
  )
};


function Mobile() {

  const [count, setCount] = useState(100)

  function bettery() {
    const newCharge = count - 10;
    if (newCharge >= 0) {
      setCount(newCharge)
    }
  }
  return (
    <div style={{ marginBottom: '100px' }}>
      <h3>Charge % : {count}</h3>
      <button style={{ padding: '10px 20px', backgroundColor: 'tomato', color: '#fff', outline: '0', border: 'none' }} onClick={bettery}>Battery Down</button>
    </div>
  )
}


function Todo() {
  const [todos, setTodo] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, [])

  return (
    <div>
      {
        todos.map(todo => <GetTodo id={todo.id} title={todo.title} completed={todo.completed}></GetTodo>)
      }
    </div >
  )
}

function GetTodo(props) {

  const getTodoStyle = {
    backgroundColor: 'lightblue',
    margin: '20px',
    padding: '20px',
    border: '2px solid salmon'
  }
  return (
    <div style={getTodoStyle}>
      <h3>Todo Id: {props.id}</h3>
      <h2>Todo Title: {props.title}</h2>
      <h3>Is Completed: {props.completed}</h3>
    </div>
  )
}

export default App;
