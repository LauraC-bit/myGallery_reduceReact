export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPicturesData: (state, action) => {
      state.picture = action.payload;
    },
  },
});

export default picturesSlice.reducer;
export const { setPicturesData } = picturesSlice.actions;
