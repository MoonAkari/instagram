import { combineReducers } from 'redux';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // users: usersReducer,
  // posts: postsReducer,
});

export default rootReducer;
