import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.currentUser = action.payload
    },
    userLogout: (state) => {
      state.currentUser = null
    },
  },
})

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer
