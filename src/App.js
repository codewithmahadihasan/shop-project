import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Eror from './Components/Eror';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import ManageInventory from './Components/ManageInventory';
import Orders from './Components/Orders';
import Shops from './Components/Shop/Shops';
import SignUp from './Components/SignUp';
import { productAndCard } from './Components/utilities/Loder';
import Main from './Main/Main';
import PrivateRoute from './PrivateRoute';
import Shiping from './Shiping';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [

        { path: '/', element: <Home></Home> },
        { path: 'order', loader: productAndCard, element: <Orders></Orders> },
        { path: 'shop', element: <Shops></Shops> },
        { path: 'manageinventory', loader: productAndCard, element: <PrivateRoute><ManageInventory></ManageInventory></PrivateRoute> },
        { path: 'login', element: <Login></Login> },
        { path: 'shiping', element: <PrivateRoute><Shiping></Shiping></PrivateRoute> },
        { path: 'registration', element: <SignUp></SignUp> },
        { path: '*', element: <Eror></Eror> }
      ]
    },

  ])


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? <div class="flex justify-center items-center h-screen">
        <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div> : <RouterProvider router={router}></RouterProvider>}

    </div>
  );
}

export default App;
