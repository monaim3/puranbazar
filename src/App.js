import logo from './logo.svg';
import './App.css';
import {  ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import router from './Component/Routes/Routes';
function App() {
  return (
    <div>
      <div>
      <ToastContainer />
        <RouterProvider router={router} />
    </div>
    </div>
  );
}

export default App;
