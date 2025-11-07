import { useEffect } from 'react';
import './App.css'
import InputForm from './components/InputForm/InputForm'
import TodoList from './components/TodoList/TodoList'
import useTodoList from './hooks/useTodoList'

function App() {

  const { items } = useTodoList();
  const itemsNotDone = items.filter(item => item.isDone === false);
  const itemsDone = items.filter(item => item.isDone === true);

  useEffect(() => {
    console.log(items);
    console.log(itemsDone.length)
  }, [itemsDone, itemsNotDone])

  return (
    <main className='d-flex flex-column gap-3'>
      <TodoList items={itemsNotDone} />
      {
        itemsDone.length > 0 ? (
          <div>
            <hr />
            <div className='text-start pb-3'>Tasks done:</div>
            <TodoList items={itemsDone} />
          </div>
        ) : (
          <></>
        )
      }
      <InputForm />
    </main>
  )
}

export default App
