import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import Register from './pages/Register/Register';
import Dashboard from './layouts/Dashboard';
import Profile from './pages/Dashboard/Profile/Profile';
import CreateTask from './pages/Dashboard/CreateTask/CreateTask';
import ManageTask from './pages/Dashboard/ManageTask/ManageTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"profile",
        element: <Profile></Profile>
      },
      {
        path: "create-task",
        element:<CreateTask></CreateTask>
      },
      {
        path:"manage-task",
        element: <ManageTask></ManageTask>
      }
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
