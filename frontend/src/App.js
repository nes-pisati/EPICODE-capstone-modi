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

  const isBackOffice = window.location.pathname.startsWith('/creator-login') ||
    window.location.pathname.startsWith('/dashboard') ||
    window.location.pathname.startsWith('/create-guide') ||
    window.location.pathname.startsWith('/edit-guide/:id');

  const containerClass = isBackOffice ? 'backoffice' : 'frontoffice'

  return (
    <div className={`App ${containerClass}`}>
      <BrowserRouter>
        <Routes>
          {/*Frontoffice*/}
          <Route index element={<Homepage />} />
          <Route path='/guides' element={<Guides />} />
          <Route path='/guide-page/:id' element={<GuidePage />} />
          <Route path='/guide-paintings/:id' element={<GuidePaintings />} />
          <Route path='/painting/:id' element={<Painting />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='*' element={<ErrorPage />} />
          {/*Backoffice*/}
          <Route path='/creator-login' element={<CreatorLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create-guide' element={<CreateGuide />} />
          <Route path='/edit-guide/:id' element={<EditGuide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
