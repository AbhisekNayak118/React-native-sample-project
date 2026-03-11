import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer' 
import  bookSlice  from './bookReducer'

export default configureStore({
  reducer: {
    counter : counterReducer,
    books: bookSlice
  },
})
export type RootState = RefurnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: |
export type AppDispatch = typeof store. dispatch
