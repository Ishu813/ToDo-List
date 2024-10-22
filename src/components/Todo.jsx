import { useState } from "react";
import Todoitem from "./Todoitem";
import styles from "./todo.module.css";
import Footer from "./Footer";

function Todo() {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);
  const completedTasks = todos.filter((todo) => todo.done).length;
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            onChange={(e) => {
              setTodo({ name: e.target.value, done: false });
            }}
            type="text"
            placeholder="Add a task..."
            value={todo.name}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
      <div className={styles.list}>
        {sortedTodos.map((item) => (
          <Todoitem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <Footer totalTasks={todos.length} completedTasks={completedTasks} />
    </div>
  );
}

export default Todo;
