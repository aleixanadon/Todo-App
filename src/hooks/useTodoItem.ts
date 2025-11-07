import { useAppDispatch } from "../hooks";
import { remove, update } from "../features/itemSlice";
import type { Item } from "../interfaces/Item";

const useTodoItem = () => {
  const dispatch = useAppDispatch();

  const removeItem = (id: string) => {
    dispatch(remove(id));
  };

  const updateItem = (item: Item) => {
    dispatch(update(item))
  }

  const handleCheck = (item: Item) => {
    updateItem({
      ...item,
      date: new Date(),
      isDone: !item.isDone
    });
  };

  return {
    updateItem,
    removeItem,
    handleCheck,
  };
};

export default useTodoItem;
