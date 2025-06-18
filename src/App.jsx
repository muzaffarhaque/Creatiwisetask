import './App.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
           
    ]);
    return (
    <> 
    <h1>hello</h1>
     <RouterProvider router={router}/>
     <ToastContainer /> 
    </>)
}

export default App
