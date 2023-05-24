import {Button, TextField} from '@mui/material'
import {CSSProperties, FC, useState} from 'react'

import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {addToDo} from '../redux/slices/syncSlice'
import TodoItem from './todoItem'

const Sync: FC = () => {
	const dispatch = useAppDispatch()
	const {todos} = useAppSelector(state => state.syncReducer)
	const [title, setTitle] = useState('')

	const addTodo = () => dispatch(addToDo({
		id: (new Date()).getTime(),
		title,
		completed: false
	}))

	const handleAdd = () => {
		setTitle("")
		addTodo()
	}

	return (
		<div style={styles.container}>
			<h3 style={{textAlign: 'center', marginBottom: "20px"}}>Sync ToDo's</h3>
			<div style={styles.row}>
				<TextField
					value={title}
					sx={{flex: 1}}
					onChange={({target}) => setTitle(target.value)}
					label='Название todo'
					variant='outlined'
				/>
				<Button
					variant='contained'
					onClick={handleAdd}
					sx={{ }}
				>
					Добавить
				</Button>
			</div>
			{todos.length ? (
				<div style={styles.todosWrapper}>
					{todos.map(todo => (
						<TodoItem todo={todo} />
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

const styles: {[key: string]: CSSProperties} = {
	container: {
		width: "49%",
		display: "flex",
		flexDirection: "column",
	},
	row: {
		display: "flex",
	},
	todosWrapper: {
		height: "400px",
		border: "1px solid black",
		borderRadius: "6px",
		padding: "20px 10px",
		display: "flex",
		flexDirection: "column",
		overflow: "auto",
		marginTop: "20px",
	}
}

export default Sync
