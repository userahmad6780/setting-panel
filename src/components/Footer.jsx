import React from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pb-10  mt-40 text-sm'>
        <div className='text-gray-600 dark:text-white'>
            <div className='flex items-center pb-5'>
                <img className="w-[40px]" src={assets.logo} alt='app_logo'/>
                <span className='px-2 text-gray-800 dark:text-white font-bold text-2xl'>OpenSea</span>
            </div>
            <p className='w-full md:w-2/3 text-sm'>{t('footer_description')}</p>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>{t('footer_company')}</p>
            <ul>
                <li className='text-sm pb-2'>{t('home')}</li>
                <li className='text-sm pb-2'>{t('about_us')}</li>
                <li className='text-sm pb-2'>{t('contact_us')}</li>
                <li className='text-sm pb-2'>{t('privacy_policy')}</li>
            </ul>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>{t('footer_get_in_touch')}</p>
            <ul>
                <li className='text-sm pb-2'>+{t('info_number')}</li>
                <li className='text-sm pb-2'>{t('info_email')}</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer