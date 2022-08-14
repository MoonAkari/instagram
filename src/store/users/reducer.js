import * as TYPE from './types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: 100,
      first_name: 'Lâm',
      last_name: 'Trần',
      full_name: 'Lâm Trần',
      nickname: 'lamtran_1',
      avatar:
        'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/297023288_1731260130547164_8889188638100111785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RDMQvOKnFKgAX-jABpE&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-ykV13WW4qoYPiQkfsm-Lmt93McyKSKoEdwgKUxoGAxw&oe=62FD3FA2',
      bio: '',
      tick: false,
      followings_count: 47,
      followers_count: 49,
      likes_count: 14, //post
      followed: true,
      follow_you: true,
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
      status: '',
      website_url: 'https://fullstack.edu.vn/',
      instagram_url: 'https://www.instagram.com/ozunukim/',
      created_at: '2022-05-05 15:34:44',
      updated_at: '2022-05-05 16:12:44',
    },
    {
      id: 102,
      first_name: '',
      last_name: '',
      full_name: 'Nguyễn Thị Ngọc Diễm',
      nickname: 'mied_',
      avatar:
        'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/297023288_1731260130547164_8889188638100111785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RDMQvOKnFKgAX-jABpE&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-ykV13WW4qoYPiQkfsm-Lmt93McyKSKoEdwgKUxoGAxw&oe=62FD3FA2',
      bio: 'Dễ cục súc',
      tick: false,
      followings_count: 51,
      followers_count: 54,
      likes_count: 2, //post
      followed: false,
      follow_you: false,
      status: '',
      website_url: 'https://fullstack.edu.vn/',
      instagram_url: 'https://www.instagram.com/ozunukim/',
      created_at: '2022-09-05 15:34:44',
      updated_at: '2022-10-05 16:12:44',
    },
    {
      id: 103,
      first_name: '',
      last_name: '',
      full_name: '𝐇𝐮𝐲̀𝐧𝐡 𝐓𝐡𝐚̉𝐨 mer',
      nickname: 'thao15',
      avatar:
        'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-1/296231370_3009773619322374_8981633869020629096_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nZkz_X5Y7CAAX8wfM50&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8kyf0wRL6K0FcQO7_MT7H8DfZI2W7GNLR71TJKpzv38A&oe=62FD1E82',
      bio: 'Movie Character',
      tick: false,
      followings_count: 339,
      followers_count: 754,
      likes_count: 16, //post
      followed: true,
      follow_you: true,
      status: '',
      website_url: 'https://fullstack.edu.vn/',
      instagram_url: 'https://www.instagram.com/ozunukim/',
      created_at: '2022-09-05 15:34:44',
      updated_at: '2022-10-05 16:12:44',
    },
    {
      id: 1000,
      first_name: '',
      last_name: '',
      full_name: 'Son Luong Thai',
      nickname: 'monmotion',
      avatar:
        'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/132297550_3543582379066097_1314718618935596856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bEiWcr08F6MAX9mqzqt&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-6JXwIIycFKpPGbwF5hfZVFr89CXqjZ6Awq4XIT8a4Kw&oe=631EA4FD',
      bio: '',
      tick: false,
      followings_count: 6,
      followers_count: 20,
      likes_count: 3, //post
      followed: true,
      follow_you: true,
      status: '',
      website_url: 'https://fullstack.edu.vn/',
      instagram_url: 'https://www.instagram.com/ozunukim/',
      created_at: '2022-09-05 15:34:44',
      updated_at: '2022-10-05 16:12:44',
    },
  ],
  user: {},
  repos: [],
  loading: false,
};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TYPE.GET_USER_LIST, (state, action) => {})
    .addCase(TYPE.GET_USER_BY_NAME, (state, action) => {
      const userByPathname = state.users.find((user) => `/@${user.nickname}` === action.payload);
      state.user = { ...userByPathname };
    })
    .addCase(TYPE.TRIGGER_FOLLOW_USER, (state, action) => {
      const currentUser = state.users.find((user) => user.id === action.payload);
      currentUser.followed = !currentUser.followed;
    })
    .addDefaultCase((state, action) => {});
});

export default usersReducer;
