import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [name, setName] = useState('DigitalWold')
  const [password, setPassword] = useState('1234')
  const handleLogin = (event)=>{
    event.preventDefault()
    if(name && password){
      dispatch(login({name}));
      navigate('/');
    }
  }
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-6xl pt-5 sm:pt-10 lg:pt-10">
        <div className="border-1 border-gray-200 w-max m-auto rounded-xl shadow-lg dark:shadow-indigo-700 flex min-h-full flex-1 flex-col justify-center px-6 py-12 my-30 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 tracking-tight text-gray-900 dark:text-gray-500">
              {t('signIn_description')}
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-500">
                  {t('name')}
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 dark:text-gray-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-500">
                    {t('password')}
                  </label>
                  <div className="text-sm">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      {t('forgot_password')}
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={(e)=>handleLogin(e)}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('signIn')}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              {t('create_new_description')}{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                {t('click_here')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login