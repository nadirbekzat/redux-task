import {createSlice} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'
import {editTodoAsync, fetchTodos, removeTodoAsync} from '../thuks/asyncThunk'

interface asyncState {
	todos: IToDo[]
	loading: boolean
}

const initialState: asyncState = {
	todos: [],
	loading: false
}

const asyncSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchTodos.pending, state => ({...state, loading: true, todos: []}))
		builder.addCase(fetchTodos.fulfilled, (state, {payload}) => ({...state, loading: false, todos: payload}))
		builder.addCase(fetchTodos.rejected, state => ({...state, loading: false, todos: []}))
		builder.addCase(removeTodoAsync.pending, state => ({...state, loading: true}))
		builder.addCase(removeTodoAsync.fulfilled, (state, {payload, meta}) => ({...state, loading: false}))
		builder.addCase(removeTodoAsync.rejected, state => ({...state, loading: false}))
		builder.addCase(editTodoAsync.pending, state => ({...state, loading: true}))
		builder.addCase(editTodoAsync.fulfilled, (state, {payload}) => ({
			...state,
			loading: false
		}))
		builder.addCase(editTodoAsync.rejected, state => ({...state, loading: false}))
	}
})

export default asyncSlice.reducer
