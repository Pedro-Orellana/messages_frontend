import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import serverApi from "../apis/serverApi";


export const postMessage = createAsyncThunk("MessageSlicer/postMessage",async (messageToSend) => {
    const postedMessage = await serverApi.post("/post", messageToSend)
    return(postedMessage.data)
})

export const getMessageList = createAsyncThunk("MessageSlicer/getMessageList", async () => {
    const list = await serverApi.get("/list");
    return(list.data)
})

const MessageSlicer = createSlice({

    name: 'message',
     
    initialState: {
        message: '',
        messageSubmitted : false,
        messageList : []
        
    },


    reducers : {
        messageReducer : (state, action) =>{
            state.message = action.payload
        },

        messageSubmittedReducer : (state, action) => {
            state.messageSubmitted = action.payload
        }
    },

    extraReducers : (builder) => {
        builder.addCase(postMessage.fulfilled, (state, action) => {
        })

        builder.addCase(getMessageList.fulfilled, (state, action) => {
             state.messageList = action.payload
        })
    }

    
})

export const {messageReducer, messageSubmittedReducer} = MessageSlicer.actions  

export const messageSelector = (state) => {return({
    message : state.message.message,
    messageSubmitted : state.message.messageSubmitted
    
})}

export const messsageListSelector = (state) =>{
    return({
        messageList: state.message.messageList
    })

    
}


export default MessageSlicer.reducer