import { useState, useContext } from 'react'
import { ButtonAction } from '../constants/ButtonAction'

import '../css/TodoInput.css'
import { AppContext } from '../layout/TodoLayout'

export const TodoInput = () => {
  // 會去執行改變 todoItem 陣列都需要使用此 todoItemsDispatch
  const { todoItemsDispatch } = useContext(AppContext)
  // 使用者輸入的值
  const [inputText, setInputText] = useState('')

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  const handleKeyUp = (actionType, event) => {
    if (event.keyCode === 13 && inputText) {
      // 執行改變 todoItem，呼叫 dispatch
      todoItemsDispatch({
        type: actionType,
        payload: { name: inputText },
      })
      setInputText('')
    }
  }

  const handleButtonClick = (actionType) => {
    if (inputText) {
      // 執行改變 todoItem，呼叫 dispatch
      todoItemsDispatch({
        type: actionType,
        payload: { name: inputText },
      })
      setInputText('')
    }
  }

  return (
    <div className="todo-input-box">
      <input
        type="text"
        value={inputText}
        placeholder="Add your task here..."
        onChange={handleInputChange}
        onKeyUp={(e) => handleKeyUp(ButtonAction.CLICK_ADD, e)}
      />
      <button
        type="button"
        onClick={() => handleButtonClick(ButtonAction.CLICK_ADD)}
      >
        Add
      </button>
    </div>
  )
}
