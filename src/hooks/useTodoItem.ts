import { useAppDispatch } from "../hooks"
import { remove } from "../features/itemSlice"

const useTodoItem = () => {

  const dispatch = useAppDispatch()  

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }
  
  return {
    removeItem
  }
}

export default useTodoItem