import {CSSProperties, FC} from 'react'
import {Container} from '@mui/material'

import "./global.css"

import Sync from './components/sync'
import Async from './components/async'

const App: FC = () => {
	return (
		<Container sx={styles.container}>
			<h3>Jusan SandBox</h3>
			<div style={styles.wrapper}>
				<Sync />
				<Async />
			</div>
		</Container>
	)
}

const styles: {[key: string]: CSSProperties} = {
	container: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: "30px",
	},
	wrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		marginTop: "30px",
	},
	title: {
		width: "min-content"
	}
}

export default App
