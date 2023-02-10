//import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Actor from './component/Actor';


import Home from './component/Home';
import SearchResult from './component/SearchResult';
import Movie from './component/Movie';


function App() {
const router = createBrowserRouter([
{
path: "/",
element: <Home/>,
},
{
path: "/search/:movie",
element: <SearchResult/>,
},
{
path:'/movie/:movieId',
element:<Movie/>
},
{
path:'/actor/:actorId',
element:<Actor/>
}
]);

return (
<RouterProvider router={router} />

);
}

export default App;