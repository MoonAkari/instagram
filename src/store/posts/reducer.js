import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

//view model
const initialState = [
  {
    id: 1,
    user_id: 1000,
    user_nickname: 'monmotion',
    likes_count: 6,
    cmt_count: 5,
    liked: true,
    bookmarked: true,
    title: 'Đồ án times',
    image:
      'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bEiWcr08F6MAX9mqzqt&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-6JXwIIycFKpPGbwF5hfZVFr89CXqjZ6Awq4XIT8a4Kw&oe=631EA4FD',
    created_at: '2022-05-05 15:34:44',
    comments: [
      {
        id: 1,
        user_id: 103,
        user_nickname: 'mied_',
        liked: true,
        likes_count: 1,
        body: 'uây cái thước xanh lá mua từ năm 11 tới giờ chưa xài nè, còn nguyên bọc luôn nheeeeeeeeee. Hông bảo tặng lại cho :v',
      },
      {
        id: 2,
        user_id: 104,
        user_nickname: 'thao15',
        liked: false,
        likes_count: 1,
        body: 'đi ĐS rất không rủ',
      },
    ],
  },
];

// for developing only

var postStates = [];
const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.GET_POST, (state, action) => {
      // api thứ 1 để call lấy post
      // api thứ 2 để call lấy comment của post (5, 10, 20)

      // gộp lại thành cái view model của mi để render
      // data1.comments = data2
      return initialState;
    })
    .addCase(TYPE.CREATE_POST, (state, action) => {
      state.push(action.payload);
    })
    .addCase(TYPE.SET_LIKE, (state, action) => {
      const currentLike = state.find((post) => post.id === action.payload.id);
      currentLike.liked = action.payload.liked;
    })
    .addCase(TYPE.SET_LIKE_COMMENT, (state, action) => {
      const parentPost = state.find((post) => post.id === action.payload.id);
      if (parentPost) {
        const currentCommentLike = parentPost.comments.find((comment) => comment.id === action.payload.comments.id);
        currentCommentLike.liked = !currentCommentLike.liked;
      }
    })
    .addCase(TYPE.SET_BOOKMARK, (state, action) => {
      const currentBookmark = state.find((post) => post.id === action.payload.id);
      currentBookmark.bookmarked = action.payload.bookmarked;
    })
    .addCase(TYPE.ADD_A_COMMENT, (state, action) => {
      const parentPost = state.find((post) => post.id === action.payload.postId);
      if (parentPost) {
        const lastChild = parentPost.comments.length - 1;
        const nextCommentId = parentPost.comments[lastChild].id + 1;
        parentPost.comments.push({
          id: nextCommentId,
          user_nickname: action.payload.current_user,
          body: action.payload.content,
        });
      }
    })
    .addDefaultCase((state, action) => {});
});

export default postsReducer;
