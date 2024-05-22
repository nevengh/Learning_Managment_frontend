import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layout/MainLayout/MainLayout'
import Home from "../pages/Home/Home";
import Teacher from "../pages/Teacher/Teacher";
import Error from '../pages/Error/Erroe'
import AddTeacher from "../pages/AddTeacher/AddTeacher";
import MainTeacher from "../components/Teacher/MainTeacher";
import EditeTeacher from "../pages/EditeTeacher/EditeTeacher";

const router = createBrowserRouter([
    {
      path: '/',
      element:<MainLayout/>,
      errorElement:<Error/>,
      children: [
      
        {
          index: true,
          element: <Home />,
        },
        {
          path : 'teachers',
          element:<MainTeacher/>,
          children:[
            {
              index: true,
              element: <Teacher />,
            },
            {
              path:'add',
              element:<AddTeacher/>
            },
            {
              path: 'edit/:id',
              element: <EditeTeacher />
            },
            
          ]
        },

        
      ],
      
    },
  ]);


  const AppRouter = () => {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default AppRouter