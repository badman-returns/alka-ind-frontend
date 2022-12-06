import React from 'react';
import { BrowserRouter, } from 'react-router-dom'
import Router from './routes/router';
import { ToastContainer } from 'react-toastify';
import ApplicationLoader from './components/HOC/ApplicationLoader';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
          <Router />
      </BrowserRouter>
    </div>
  );
}

export default ApplicationLoader(App);
