

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Maincomponent from './components/Maincomponent'


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          
          index:true,
          element:<HomePage/>
        },
        {
            
          path:"projects",
          element:<ProjectsPage/>
        },
        {
          path:"projects/:id",
          element:<ProjectsPage/>
         
        },
        {
            
          path:"about-me",
          element:<Maincomponent/>
        }
      ]
      

    }
  ]);
  
  return (
   <div>
       <RouterProvider router={router}/>
   </div>
   
   
  )
}

export default App
