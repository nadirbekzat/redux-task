import {configureStore} from '@reduxjs/toolkit'

import SyncReducer from './slices/syncSlice'
import AsyncReducer from './slices/asyncSlice'

export const store = configureStore({
	reducer: {
		syncReducer: SyncReducer,
		asyncReducer: AsyncReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
