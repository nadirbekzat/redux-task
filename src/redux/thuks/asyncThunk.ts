import {createAsyncThunk} from '@reduxjs/toolkit'

import {IToDo} from '../../constants/types'
import {api} from '../../constants/axios.config'

export const fetchTodos = createAsyncThunk<IToDo[]>('todos/fetch', async () => {
	return await api
		.get('/todos?_limit=10')
		.then(res => res.data)
		.catch(e => console.error(e.response ?? e))
})

export const removeTodoAsync = createAsyncThunk('todos/remove', async (id: number) => {
	return await api
		.delete(`/todos/${id}`).
		then(res => res.data)
		.catch(e => console.error(e.response ?? e))
})

export const editTodoAsync = createAsyncThunk('todos/edit', async ({id, title}: {id: number, title: string}) => {
	return await api
		.patch(`/todos/${id}`, {title})
		.then(res => res.data)
		.catch(e => console.error(e.response ?? e))
})
