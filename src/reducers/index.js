import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    state: () => ({})
});

export default rootReducer;


/**
 *
 export const GET_BLOG_ASYNC = createAsyncTypes('GET_BLOG')
 switch (action.type) {
  case types.GET_BLOG_ASYNC.PENDING:
    return {
      ...state,
      loading: true
    }
  case types.GET_BLOG_ASYNC.SUCCESS:
    return {
      ...state,
      posts: action.posts,
      loading: false
    }
  case types.GET_BLOG_ASYNC.ERROR:
    return {
      ...state,
      loading: false
    }
  default:
    return state
}
 */
