import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserData {
  Id:number;
  Name: string;
}

export interface UserListState {
  userList: UserData[];
};


const initialState:UserListState = {
  userList: []
};

const userSlice = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {
      updateUser(state, action:PayloadAction<UserData[]>) {
        state.userList = action.payload;
      }
    },
  })

  export const { updateUser } = userSlice.actions;
  export default userSlice.reducer;