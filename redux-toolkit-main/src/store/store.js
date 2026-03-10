import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer' 

export default configureStore({
  reducer: {
    counter : counterReducer
  },
})
export type RootState = RefurnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: |
export type AppDispatch = typeof store. dispatch
