import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux';
import { updateNotification, updateUser } from '../redux/actions/auth';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import useToast from '../customHooks/useToast';

const MyProfile = () => {
  const { t } = useTranslation();
  const customToastify = useToast()
  const { user, isNotificationEnabled } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    setIsEdit(!isEdit)
    if(name !== user.name){
      dispatch(updateUser({name}))
      customToastify(t('profile_updated'))
    }
  }

  const handleNotification = (val) =>{
    dispatch(updateNotification(val))
  }

  useEffect(()=>{
    setName(user?.name)
  },[user])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-6xl pt-5 sm:pt-10 lg:pt-20">
        <div className='w-1/3'>
          <img src={assets.profile_pic} alt={assets.profile_pic} className='rounded-lg w-30 mt-10 mb-5' />
          <p className='text-lg font-medium border-b-1 border-gray-300 pb-1 dark:text-white'>{user?.name}</p>
        </div>
        <p className='text-gray-500 py-5 underline'>{t('contact_information')}</p>
        <div className='flex items-center'>
          <div className='text-sm pr-10 dark:text-white'>
            <p className='pb-2'>{t('name')}:</p>
          </div>
          <div className='text-sm'>
            {
              !isEdit ? 
                <p className='text-indigo-400 pb-2'>{user?.name}</p> :
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 dark:text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            }
          </div>
        </div>
        <p className='text-gray-500 py-5 underline'>{t('basic_information')}</p>
        <div className='flex'>
          <div className='text-sm pr-10 dark:text-white'>
            <p className='pb-2'>{t('gender')}:</p>
            <p className='pb-2'>{t('birthday')}:</p>
          </div>
          <div className='text-sm'>
            <p className='text-gray-500 text-sm pb-2'>{t('not_selected')}</p>
            <p className='text-gray-500 text-sm pb-2'>{t('not_selected')}</p>
          </div>
        </div>

        <label className="flex items-center cursor-pointer pt-3">
          <span className="mr-3 text-gray-700 dark:text-white font-medium">{t('enable_notification')}</span>
          <input type="checkbox" checked={isNotificationEnabled} onChange={()=>{handleNotification(!isNotificationEnabled)}} />
        </label>

        <div className='mt-10'>
          <button onClick={()=>{handleEdit()}} className='border-1 mr-3 text-sm rounded-full text-gray-600 border-indigo-600 w-max py-2 px-6 mb-2 dark:text-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 cursor-pointer'>
            {!isEdit ? t('edit') : t('save_information')}
          </button>
        </div>
        <ToastContainer position="bottom-right"/>
      </div>
    </div>
  )
}

export default MyProfile