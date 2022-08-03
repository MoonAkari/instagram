import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 100,
    first_name: 'Lâm',
    last_name: 'Trần',
    full_name: 'Lâm Trần',
    nickname: 'lamtran_1',
    avatar:
      'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/275364808_4655985554523505_4271014837792892471_n.jpg?stp=c671.254.1111.1111a_dst-jpg_s160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=snY2JoB8wDsAX_BYO6_&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_x31gycTZJUv6Iw020yNuvIYRrZUeSWxdgrIQSncVUIQ&oe=62ECF741',
    bio: '',
    tick: false,
    followings_count: 47,
    followers_count: 49,
    likes_count: 14, //post
    followed: true,
    follow_you: true,
    is_followed: true,
    status: 'Followed by ',
    website_url: 'https://fullstack.edu.vn/',
    instagram_url: 'https://www.instagram.com/lamtran_1/',
    created_at: '2022-05-05 15:34:44',
    updated_at: '2022-05-05 16:12:44',
  },
  {
    id: 101,
    first_name: '',
    last_name: '',
    full_name: 'Black Sheep',
    nickname: 'ozunukim',
    avatar:
      'https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/78205131_2706672912734775_9153607573100822528_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bDs0Klj2PWoAX_ceNZS&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_y6kvIdCct-VEEEHQRhkRJdZbjqo0n-qx7yZNG6FAQkA&oe=630B7D3B',
    bio: '',
    tick: false,
    followings_count: 9,
    followers_count: 93,
    likes_count: 1, //post
    followed: false,
    follow_you: false,
    is_followed: false,
    status: '',
    website_url: 'https://fullstack.edu.vn/',
    instagram_url: 'https://www.instagram.com/ozunukim/',
    created_at: '2022-05-05 15:34:44',
    updated_at: '2022-05-05 16:12:44',
  },
];

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.GET_USER, (state, action) => {})
    .addCase(TYPE.UNFOLLOW_USER, (state, action) => {
      const currentUser = state.find((user) => user.id == action.payload);
      currentUser.is_followed = false;
    })
    .addDefaultCase((state, action) => {});
});

export default usersReducer;
