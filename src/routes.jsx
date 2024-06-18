import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './pages/Layout';  // Correct import path
import Home from './pages/Home';
import Single from './pages/Single';
import MainLanding from './components/MainLanding';  // Import the MainLanding component

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<MainLanding />} />  
      <Route path="/category/:type" element={<Home />} />
      <Route path="/single/:type/:theId" element={<Single />} />
    </Route>
  )
);