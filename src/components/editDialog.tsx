import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import {Dispatch, FC, SetStateAction, useState} from 'react'

import {IToDo} from '../constants/types'
import {useAppDispatch} from '../redux/hooks'
import {editTodo} from '../redux/slices/syncSlice'
import {editTodoAsync} from '../redux/thuks/asyncThunk'

type TProps = {
	isOpen: boolean
	isAsync?: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	todo: IToDo
}

const EditDialog: FC<TProps> = ({isOpen, isAsync = false, setOpen, todo}) => {
	const dispatch = useAppDispatch()
	const [title, setTitle] = useState(todo.title)
	const handleChange = () => {
		dispatch(!isAsync ? editTodo({
			id: todo.id,
			title
		}) : editTodoAsync({id: todo.id, title}))
		setOpen(false)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Dialog
				open={isOpen}
				onClose={handleClose}
			>
				<DialogTitle>Изменение ToDo</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin={'dense'}
						label={'Title'}
						type={'text'}
						fullWidth
						variant={'standard'}
						value={title}
						onChange={({target}) => setTitle(target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Отмена</Button>
					<Button onClick={handleChange}>Изменить</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default EditDialog
