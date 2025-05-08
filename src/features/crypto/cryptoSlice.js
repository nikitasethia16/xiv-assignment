
import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../data/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateAsset(state, action) {
      const updated = action.payload;
      const index = state.findIndex(asset => asset.id === updated.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updated };
      }
    }
  }
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;