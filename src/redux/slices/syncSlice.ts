import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'

interface syncState {
	todos: IToDo[]
}

const initialState: syncState = {
	todos: []
}

const syncSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToDo: (state, action: PayloadAction<IToDo>) => ({
			...state,
			todos: [...state.todos, action.payload]
		}),
		removeToDo: (state, action: PayloadAction<number>) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== action.payload)
		}),
		editTodo: (state, action: PayloadAction<{id: number; title: string}>) => ({
			...state,
			todos: state.todos.map((todo) => {
				if (todo.id !== action.payload.id) return todo;
				return {
					...todo,
					title: action.payload.title,
				}
			})
		})
	}
})

export const {addToDo, removeToDo, editTodo} = syncSlice.actions

export default syncSlice.reducer
