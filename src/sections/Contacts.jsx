import React, {useEffect} from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Contacts = () => {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, [])

const {darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}pb-20`}>
      <section id='contacts' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-full h-fit m-auto  grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}>
        <div data-aos="zoom-in" className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
          <h1 className='text-2xl text-black font-semibold dark:text-white'>Send a message today</h1>
          <input type='text' placeholder='Enter your full name here' className='w-full px-6 py-3 border-2 border-gray-200'/>
          <input type='email' placeholder='Enter your valid email' className='w-full px-6 py-3 border-2 border-gray-200'/>
          <input type='number' placeholder='Enter your valid mobile number' className='w-full px-6 py-3 border-2 border-gray-200'/>
          <textarea name='' id='' cols="30" rows="5" className='w-full px-6 py-3 border-2 border-gray-200'>
            Enter your message here...
          </textarea>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black 
                text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                    SEND EMAIL
                </button>
        </div>
        <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
        <h1 data-aos="zoom-in" data-aos-delay="300" className='text-black text-[40px] dark:text-white font-semibold leading-10'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel adipisci dolores non numquam, at, ducimus soluta dolore assumenda omnis?
          <p data-aos="zoom-in" data-aos-delay="500" className='text-xl text-gray-600 text-justify dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus vitae, quos aliquam fugiat, unde ut totam quibusdam eum hic commodi labore? Impedit unde magnam praesentium aspernatur culpa ipsum amet?
          </p>
        </h1>
        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black 
                text-lg p-4 w-[250px] text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                    SEND EMAIL
                </button>
        </div>
      </section>
    </div>
  )
}

export default Contacts