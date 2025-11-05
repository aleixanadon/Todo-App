import './App.css'
import InputForm from './components/InputForm/InputForm'
import TodoList from './components/TodoList/TodoList'
import useTodoList from './hooks/useTodoList'

function App() {

  const { items } = useTodoList();

  return (
    <main className='d-flex flex-column gap-3'>
      <TodoList items={items} />
      <InputForm />
    </main>
  )
}

export default App
