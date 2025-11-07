import { useEffect } from "react";
import type { Item } from "../../interfaces/Item";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  items?: Item[];
}

const TodoList: React.FC<TodoListProps> = ({ items = [] }) => {
  useEffect(() => {}, [items]);

  if (items.length === 0) {
    return <div className="text-center">No tasks to do</div>;
  }

  if (items.length > 0) {
    return (
      <div>
        <ul className="list-group shadow-sm">
          {items.map((item, index) => (
            <TodoItem {...item} key={index} />
          ))}
        </ul>
      </div>
    );
  }
};

export default TodoList;
