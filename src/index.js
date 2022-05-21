import React from 'react';
import { createRoot } from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GoogleSlicer from './reducers/GoogleSlicer';

import Navbar from './components/Navbar';
import App from './components/App';
import MessageList from './components/MessageList';
import MessageSlicer from './reducers/MessageSlicer';



const container = document.getElementById('root')
const root = createRoot(container)

const store = configureStore({
  reducer: {
    google: GoogleSlicer,
    message: MessageSlicer
  }
})


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <div className='container'>

        <div className='row'>

          <div className='col'>
          </div>

          <div className='col-6'>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/list' element={<MessageList />} />
            </Routes>
          </div>

          <div className='col'>
          </div>

        </div>
      </div>

    </BrowserRouter>
  </Provider>)
