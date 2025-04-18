import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { switchTheme } from './redux/actions/theme';
import { useThemeDetector } from './customHooks/useThemeDetector';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch()
  const isSystemDarkTheme = useThemeDetector()

  useEffect(() => {
      if(isDarkMode == null){
        dispatch(switchTheme(isSystemDarkTheme))
      }
  }, [isSystemDarkTheme]);

  return (
    <div className="px-4 sm:px-[10%] bg-white dark:bg-slate-900">
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App