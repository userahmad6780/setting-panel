import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../redux/actions/theme';
import { switchLanguage } from '../redux/actions/language';
import { FiShoppingCart } from "react-icons/fi";
import { logout } from '../redux/actions/auth';

function AppBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isDarkMode } = useSelector((state) => state.theme);
    const { currentLanguage } = useSelector((state) => state.appLanguage);
    const { cartItems } = useSelector((state) => state.cartProducts);
    const { user } = useSelector((state) => state.userAuth);

    const darkModeHandler = () => {
        dispatch(switchTheme(!isDarkMode))
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        dispatch(switchLanguage(lng))
    };
    
    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);

  return (
    <div className='hidden md:flex justify-between items-center py-5 px-4 sm:px-[10%] absolute inset-x-0 top-0 z-50'>
        <div>
            <img className="" src={assets.logo} alt='app_logo'/>
        </div>
        <div>
            <ul className={`flex gap-3 font-semibold text-gray-800 dark:text-white`}>
                <NavLink to={'/'} className='custom-navLink'>
                    <li>{t('home')}</li>
                    <hr className='hidden text-indigo-600 dark:text-white'/>
                </NavLink>
                <NavLink to={'/products'} className='custom-navLink'>
                    <li>{t('products')}</li>
                    <hr className='hidden text-indigo-600 dark:text-white'/>
                </NavLink>
            </ul>
        </div>
        <div className='flex gap-6'>
            <div className='relative group flex justify-center cursor-pointer'>
                <div className='flex items-center justify-center gap-2 text-gray-800 dark:text-white'>
                    <img src={currentLanguage == 'de' ? assets.german_flg_icon : assets.uk_flg_icon} className="w-5 h-5 rounded-full" />
                    <span>{currentLanguage == 'de' ? 'de' : 'en'}</span>     
                </div>
                <div className='absolute right-0 top-0 pt-10 z-1'>
                    <div className='hidden w-max group-hover:flex flex-col rounded-md bg-gray-100 dark:bg-gray-700 py-2 px-4'>
                        <button type="button" onClick={() => changeLanguage('de')} className="cursor-pointer flex items-center gap-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2 rounded transition-colors duration-200">
                            <img src={assets.german_flg_icon} className="w-5 h-5 rounded-full" />
                            <span>de</span>                
                        </button>
                        <button type="button" onClick={() => changeLanguage('en')} className="cursor-pointer flex items-center gap-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2 rounded transition-colors duration-200">
                            <img src={assets.uk_flg_icon} className="w-5 h-5 rounded-full" />
                            <span>en</span>
                        </button>
                    </div>
                </div>
            </div>
            <button className='cursor-pointer' onClick={()=> darkModeHandler()}>
                {
                    isDarkMode && < IoSunnyOutline className='text-yellow-300 text-2xl'/>
                }
                {
                    !isDarkMode && <IoMoonOutline className='text-gray-800 text-2xl'/>
                }
            </button>
            {   
                cartItems.length > 0 &&
                <div className='flex items-center relative pr-5 cursor-pointer' onClick={()=>navigate('/cart')}>
                    <span className='absolute px-2 rounded-full bg-indigo-600 text-white font-bold text-sm bottom-6 left-1'>{cartItems.length}</span>
                    <FiShoppingCart className='text-lg dark:text-white'/>
                </div>
            }
            {
                !user ?
                <div className='cursor-pointer py-2 px-3 bg-indigo-600 rounded-md' onClick={()=>{navigate('/login')}}>
                    <p className='text-gray-50'>{t('signIn')}</p>
                </div>    :
                <div className='relative group'>
                    <div className='flex items-center '>
                        <div className="w-10 h-10 rounded-full dark:bg-gray-300 bg-gray-600 text-white dark:text-gray-600 flex items-center justify-center font-semibold uppercase mr-2">
                            {user.name[0]}
                        </div>
                        <img src={assets.dropdown_icon} alt={assets.dropdown_icon} className='w-3'/>
                    </div>
                    <div className='absolute right-0 top-0 pt-12 z-1'>
                        <div className='hidden w-max group-hover:flex flex-col rounded-md bg-gray-100 py-2 px-4'>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>navigate('/myProfile')}>{t('my_profile')}</p>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>dispatch(logout())}>{t('logout')}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default AppBar