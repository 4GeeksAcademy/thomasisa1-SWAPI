import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './pages/Layout';  // Correct import path
import Home from './pages/Home';
import Single from './pages/Single';
import MainLanding from './components/MainLanding';  // Import the MainLanding component

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      {/* Default route set to MainLanding component */}
      <Route path="/" element={<MainLanding />} />  
      {/* Route for displaying a category of items */}
      <Route path="/category/:type" element={<Home />} />
      {/* Route for displaying a single item details */}
      <Route path="/single/:type/:theId" element={<Single />} />
    </Route>
  )
);