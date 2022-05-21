import { createSlice } from "@reduxjs/toolkit";

const GoogleSlicer = createSlice({

    name:'google_slicer',

    initialState : {
        isSignedIn : false,
        first_name : null,
        last_name : null,
        email : null
    },

    reducers : {
        isSignedInReducer : (state, action) => {
            state.isSignedIn = action.payload
        },

        informationReducer : (state, action) => {
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.email = action.payload.email
        }
    }
})

export const { isSignedInReducer, informationReducer } =  GoogleSlicer.actions

export const isSignedInSelector = (state) => {return(state.google.isSignedIn)}
export const userInformationSelector = (state) => {return({
    first_name: state.google.first_name,
    last_name: state.google.last_name,
    email: state.google.email
})}

export default GoogleSlicer.reducer