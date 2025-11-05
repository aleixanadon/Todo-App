import { useEffect } from "react";
import type { Item } from "../../interfaces/Item";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  items?: Item[]
}

const TodoList: React.FC<TodoListProps> = ({ items = [] }) => {
  useEffect(() => {

  }, [items]) 
  return (
    items.length === 0 ? (
      <>No items in the list</>
    ) : (
      <ul className="list-group list-group-numbered">
      {
        items.map((item, index) => (
            <TodoItem {...item} key={index} />
        ))
      }
    </ul>
    )
  )
}

export default TodoList