import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";

interface ChatMessage {
  message: string;
  role: "user" | "model" | "error";
}

// Define the initial state using an interface
interface AiChatBotState {
  response: string | null;
  loading: boolean;
  error: string | null;
  messages: ChatMessage[]
}

const initialState: AiChatBotState = {
  response: null,
  loading: false,
  error: null,
  messages:[]
};

// Define the async thunk for sending the message to the chatbot
export const chatBot = createAsyncThunk<
  { message: string; content?: string },
  { prompt: { prompt: string }; productId: number | null | undefined; userId: number | null }
>(
  "aiChatBot/generateResponse",
  async ({ prompt, productId, userId }, { rejectWithValue }) => {
    try {
      const response = await api.post("/ai/chat", prompt, {
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${localStorage.getItem("jwt")}`
        },
        params: {
          userId,
          productId,
        },
      });
      console.log("response ",productId, response.data);
      return response.data;
    } catch (error) {
        const err = error as { response?: { data?: { message?: string } } };
        console.log("error ", err.response);
      return rejectWithValue(
        err.response?.data?.message || "Failed to generate chatbot response"
      );
    }
  }
);

// Create the slice
const aiChatBotSlice = createSlice({
  name: "aiChatBot",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(chatBot.pending, (state,action) => {
        state.loading = true;
        state.error = null;
        const { prompt } = action.meta.arg;
        
        // You can log or use the data here
        // console.log('Pending request:', { prompt, productId, userId });
        const userPrompt: ChatMessage = {message:prompt.prompt,role:"user"}
        state.messages=[...state.messages,userPrompt]
      })
      .addCase(chatBot.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload.message;
        
        // Properly format the AI response with role information
        const aiResponse: ChatMessage = {
          message: action.payload.message || action.payload.content || "No response received",
          role: "model"
        };
        state.messages = [...state.messages, aiResponse];
      })
      .addCase(chatBot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        
        // Add error message to chat so user sees it
        const errorMessage: ChatMessage = {
          message: `Error: ${action.payload || 'Failed to get response'}`,
          role: "error"
        };
        state.messages = [...state.messages, errorMessage];
      });
  },
});

// Export the reducer
export default aiChatBotSlice.reducer;
