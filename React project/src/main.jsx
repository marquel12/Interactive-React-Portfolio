// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import About from './Pages /About.jsx'; //importing the About page
import Portfolio from './Pages /Portfolio.jsx'; //importing the Portfolio page 
import Contact from './Pages /Contact.jsx';
import Resume from './Pages /Resume.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



const router = createBrowserRouter([
  {
    path: '/', //this is the root path when the page loads
    element: <App />,
    children: [
      {
        path: '/About', // this is the path for the About page
        element: <About />,
      },

      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> //this is the router provider that will render the pages



)
