import type { Item } from "../../interfaces/Item";
import DeleteButton from "../DeleteButton/DeleteButton";

const TodoItem: React.FC<Item> = ({ id, text, date }) => {
  
  const [hours, minutes, seconds] = [
    date.getHours(),
    date.getMinutes() + 1,
    date.getSeconds(),
  ];

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
      <input type="checkbox" className="form-check-input" />
      <div className="ms-2 text-start fw-medium text-wrap">{text}</div>
      <span className="badge text-bg-primary rounded-pill">
        {hours}:{minutes}:{seconds}
      </span>
      <DeleteButton id={id} />
    </li>
  );
};

export default TodoItem;
