
import { configureStore } from '@reduxjs/toolkit'
import enumReducer from '../states/EnumSlice';
import userReducer from '../states/UserSlice';


export const store = configureStore({
  reducer: {
    enumsDropdown: enumReducer,
    userList: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;