import { createSlice } from '@reduxjs/toolkit';

const topics = createSlice({
  name: 'topics',
  reducers: {
    addTopic: (state,action) => {
      state = {
        ...state,
        [action.payload.id]: {
          data: action.payload,
          quizIds: []
        }
      };
    }
  },
  initialState: {
    allTopics: {

    }
  }
});

export const selectAllTopics = (state) => state.topics.allTopics;
export default topics.reducer;
export const { addTopic } = topics.actions;

