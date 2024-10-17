import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import {Provider} from "react-redux"
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Watch from './components/Watch';
const appRouter=createBrowserRouter(
  [{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"watch",
      element:<Watch/>
    }
  ]
}])
function App() {
  return (
  <Provider store={store}>
<Head/>
<RouterProvider router={appRouter}/>
</Provider>
  


  )
}

export default App;
