import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../redux/actions/theme';
import { switchLanguage } from '../redux/actions/language';


function AppBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isDarkMode } = useSelector((state) => state.theme);
    const { currentLanguage } = useSelector((state) => state.appLanguage);
    let [isLogedIn, setIsLogedIn] = useState(false)

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
                    <hr className='hidden text-blue-400'/>
                </NavLink>
                <NavLink to={'/products'} className='custom-navLink'>
                    <li>{t('products')}</li>
                    <hr className='hidden text-blue-400'/>
                </NavLink>
            </ul>
        </div>
        <div className='flex gap-4'>
            <div className='relative group flex justify-center'>
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
            <button onClick={()=> darkModeHandler()}>
                {
                    isDarkMode && < IoSunnyOutline className='text-yellow-300 text-2xl'/>
                }
                {
                    !isDarkMode && <IoMoonOutline className='text-gray-800 text-2xl'/>
                }
            </button>
            {
                !isLogedIn ?
                <div className='cursor-pointer py-2 px-3 bg-indigo-600 rounded-md' onClick={()=>{navigate('/login')}}>
                    <p className='text-gray-50'>{t('signUp')}</p>
                </div>    :
                <div className='relative group'>
                    <div className='flex items-center '>
                        <img src={assets.profile_pic} alt={assets.profile_pic} className='w-10 rounded-full mr-2'/>
                        <img src={assets.dropdown_icon} alt={assets.dropdown_icon} className='w-3'/>
                    </div>
                    <div className='absolute right-0 top-0 pt-18 z-1'>
                        <div className='hidden w-max group-hover:flex flex-col rounded-md bg-gray-100 py-2 px-4'>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>navigate('/myProfile')}>My Profile</p>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>navigate('/myAppointment')}>My Appointment</p>
                            <p className='text-md py-2 hover:text-gray-600 cursor-pointer' onClick={()=>console.log('do some thing')}>Logout</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default AppBar