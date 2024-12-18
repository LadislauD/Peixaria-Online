import { createSlice } from '@reduxjs/toolkit';
import { cookieParser } from './helpers';

function tokenPayload(){
    let tokenPayload = '';
    try {
        let token = cookieParser('session');
        tokenPayload = JSON.parse(atob(token[1]));
    } catch (error) {

    }finally{
        return tokenPayload;
    }
    
}

export const clientSlice = createSlice({
  name: 'client',
  initialState: {
    value:  tokenPayload() ,
  },
  reducers: {
    updateName: (state) => {      
      state.value = tokenPayload();
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateName } = clientSlice.actions

export default clientSlice.reducer