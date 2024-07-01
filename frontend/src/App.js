import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/client/Homepage';
import Guides from './pages/client/Guides';
import GuidePage from './pages/client/GuidePage';
import GuidePaintings from './pages/client/GuidePaintings';
import Painting from './pages/client/Painting';
import UserLogin from './pages/client/UserLogin';
import UserProfile from './pages/client/UserProfile';
import ErrorPage from './pages/ErrorPage';
import CreatorLogin from './pages/backend-interface/CreatorLogin';
import Dashboard from './pages/backend-interface/Dashboard';
import CreateGuide from './pages/backend-interface/CreateGuide';
import EditGuide from './pages/backend-interface/EditGuide';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        {/*Pagine del client*/}
        <Route index element={<Homepage />}/>
        <Route path='/guides' element={<Guides />}/>
        <Route path='/guide-page' element={<GuidePage />}/>
        <Route path='/guide-paintings' element={<GuidePaintings />}/>
        <Route path='/painting' element={<Painting />}/>
        <Route path='/user-login' element={<UserLogin />}/>
        <Route path='/user-profile' element={<UserProfile />}/>
        <Route path='*' element={<ErrorPage />}/>
        {/*Interfaccia del backend*/}
        <Route path='/creator-login' element={<CreatorLogin />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/create-guide' element={<CreateGuide />}/>
        <Route path='/edit-guide' element={<EditGuide />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
