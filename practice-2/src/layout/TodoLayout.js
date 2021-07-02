/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useReducer } from 'react'
import uuid from 'uuid'

import '../css/TodoLayout.css'
// constants
import { ItemStatus } from '../constants/ItemStatus'
// components
import { TodoTitle } from '../components/TodoTitle'
import { TodoInput } from '../components/TodoInput'
import { TodoList } from '../components/TodoList'
import { ButtonAction } from '../constants/ButtonAction'

// 由根元件來儲存主要邏輯數據 useReducer + useContext
export const AppContext = React.createContext()

export const TodoLayout = () => {
  const initialTodoItems = []

  // todoItem reducer 處理函數
  const todoItemReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case ButtonAction.CLICK_ADD:
        return [
          ...state,
          {
            id: uuid.v4(),
            name: action.payload.name,
            status: ItemStatus.UNDONE,
          },
        ]
      case ButtonAction.CLICK_DONE:
        return state.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              status: ItemStatus.DONE,
              doneAt: new Date().toLocaleString([], { hour12: false }),
            }
          } else {
            return item
          }
        })
      case ButtonAction.CLICK_DELETE:
        return state.filter((item) => {
          return item.id !== payload.id
        })
      default:
        return state
    }
  }

  // 是否只顯示 done 的數據，會影響邏輯之變數處理函數
  const showDoneReducer = (state, action) => {
    return action.payload.showDone
  }

  // todoItems 原始數據
  const [todoItems, todoItemsDispatch] = useReducer(
    todoItemReducer,
    initialTodoItems
  )

  // 是否只顯示 DONE 的數據
  const [showDone, showDoneDispatch] = useReducer(showDoneReducer, false)

  // 取得用於顯示的數據
  const getDisplayItems = (showDone) => {
    if (showDone) {
      return todoItems.filter((todoItem) => {
        return todoItem.status === ItemStatus.DONE
      })
    }
    return todoItems
  }

  // 用 useMemo 呼叫 getDisplayItems，當指定變數變動才呼叫
  // useMemo 用於包裝 "值"
  // useCallback 用於包裝 "function"
  const displayItems = useMemo(
    () => getDisplayItems(showDone),
    [showDone, todoItems]
  )

  return (
    // 利用 AppContext.Provider 將根目錄想要分享的變數透過屬性方式來傳遞給底下所有子子孫孫元件
    <AppContext.Provider
      value={{ displayItems, todoItemsDispatch, showDone, showDoneDispatch }}
    >
      <div className="todo-layout">
        <TodoTitle />
        <TodoInput />
        <TodoList />
      </div>
    </AppContext.Provider>
  )
}
