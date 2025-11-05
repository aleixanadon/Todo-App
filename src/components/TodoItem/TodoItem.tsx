import type { Item } from "../../interfaces/Item";
import DeleteButton from "../DeleteButton/DeleteButton";

const TodoItem: React.FC<Item> = ({ id, text, date }) => {
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
      <div className="ms-2 me-auto fw-medium">{text}</div>
      <span className="badge text-bg-primary rounded-pill">
        {day}/{month}/{year}
      </span>
      <DeleteButton id={id} />
    </li>
  );
};

export default TodoItem;
