import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Splash from '../components/Splash';
import Reports from '../components/Report';
import Calendar from '../components/Calendar';
import Dashboard from '../components/Dashboard';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },

]);
