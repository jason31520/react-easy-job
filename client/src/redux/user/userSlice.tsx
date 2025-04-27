import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from '../../models/User'

interface UserState {
  value: User
}

const initialState: UserState = {
  value: {
    username: '',
    password: '',
    confirmPassword: '',
    type: 'talent'
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.value.username = action.payload
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.value.password = action.payload
    },
    changeConfirmPassword: (state, action: PayloadAction<string>) => {
      state.value.confirmPassword = action.payload
    },
    changeType: (state, action: PayloadAction<string>) => {
      state.value.type = action.payload
    }
  }
})

export const { changeUsername, changePassword, changeConfirmPassword, changeType } = userSlice.actions

export default userSlice.reducer