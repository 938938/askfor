import { GoogleGenAI } from '@google/genai';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AiState = {
  loading: boolean;
  error: string | null;
  list: { ask: string; answer: string; date: string }[];
};

const ai = new GoogleGenAI({
  apiKey: `${process.env.NEXT_PUBLIC_TOKEN}`,
});

export const fetchAiAnswer = createAsyncThunk(
  '/ask/ai',
  async (question: string, thunkAPI) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `다음 질문에 대해 친절하고 정성스럽게 한 문장으로 대답해줘:\n"${question}"`,
      });
      return {
        ask: question,
        answer: `${response.text}`,
        date: new Date().toLocaleString(),
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: AiState = {
  loading: false,
  error: null,
  list: [],
};

const AiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAiAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAiAnswer.fulfilled, (state, action) => {
        state.loading = false;
        const prev = state.list;
        state.list = [action.payload, ...prev];
      })
      .addCase(fetchAiAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = AiSlice.actions;
export default AiSlice.reducer;
