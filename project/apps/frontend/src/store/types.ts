// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
