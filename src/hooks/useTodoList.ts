import { useAppDispatch, useAppSelector } from "../hooks"
import { insert } from "../features/itemSlice"

const useTodoList = () => {
  
  const items = useAppSelector((state) => state.items.value)
  const dispatch = useAppDispatch()  

  const addItem = (text: string) => {
    dispatch(insert(text));
  }

  return {
    items,
    addItem
  }
}

export default useTodoList