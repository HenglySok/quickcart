import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router'; // ✅ Import Routes and Route
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import RootLayout from './assets/components/Layout/root-layout.jsx';
import Shop from './assets/pages/ShopPages/Shop.jsx';
import Contact from './assets/pages/Contact.jsx';
import Beauty from './assets/pages/CategoryPage/Beauty.jsx';
import Fragrances from './assets/pages/CategoryPage/Fragrances.jsx';
import Furniture from './assets/pages/CategoryPage/Furniture.jsx';
import Groceries from './assets/pages/CategoryPage/Groceries.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap Routes inside BrowserRouter */}
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/beauty' element={<Beauty />} />
          <Route path='/fragrances' element={<Fragrances />} />
          <Route path='/furniture' element={<Furniture />} />
          <Route path='/groceries' element={<Groceries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);