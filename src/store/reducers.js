import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import postsReducer from './posts/reducer';
import usersReducer from './users/reducer';
import usersReducerFromApi from './usersAPI/reducer';
import userSelected from './userSelected/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
  usersApi: usersReducerFromApi,
  userSelect: userSelected,
});

export default rootReducer;
