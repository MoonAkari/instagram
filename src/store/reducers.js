import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  posts: postsReducer,
});

export default rootReducer;
