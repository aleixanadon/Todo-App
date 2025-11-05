import { useState, type ChangeEvent } from "react"
import useTodoList from "../../hooks/useTodoList";

const InputForm = () => {

  const [inputValue, setInputValue] = useState<string>("");

  const { addItem } = useTodoList();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim() === "") { return }
    addItem(inputValue)
    setInputValue("")
  }

  return (
    <form className="input-group shadow-sm" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="form-control"
        onChange={handleOnChange}
        value={inputValue}
        placeholder="I have to do..."
      />
      <button type="submit" className="btn btn-primary">
        Add item
      </button>
    </form>
  )
}

export default InputForm