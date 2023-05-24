import {Button, CircularProgress} from '@mui/material'
import {CSSProperties, FC} from 'react'

import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {fetchTodos} from '../redux/thuks/asyncThunk'
import TodoItem from './todoItem'

const Async: FC = () => {
	const dispatch = useAppDispatch()
	const {todos, loading} = useAppSelector(state => state.asyncReducer)
	const handleRefresh = () => {
		dispatch(fetchTodos())
	}

	return (
		<div style={styles.container}>
			<h3 style={{textAlign: 'center', marginBottom: "20px"}}>Async ToDo's</h3>
			<Button
				variant='contained'
				onClick={handleRefresh}
				sx={{width: '100%', height: '56px'}}
			>
				Обновить
			</Button>
			{loading ? (
				<CircularProgress />
			) : todos.length ? (
				<div style={styles.todosWrapper}>
					{todos.map(todo => (
						<TodoItem
							todo={todo}
							isAsync
						/>
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

export default Async
