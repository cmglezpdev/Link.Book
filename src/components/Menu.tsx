
import { goBack } from 'react-chrome-extension-router';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';

export const Menu = () => {
    return (
      <nav className='w-full h-navbar bg-slate-400 flex items-center px-2 justify-between'>
          <IoIosArrowDropleftCircle 
            className='text-xl cursor-pointer' 
            onClick={() => goBack()}
          />

          <p className='uppercase font-bold text-gray-800 cursor-default'>
            Link.Book
          </p>

          <AiFillGithub 
            className='inline text-xl mr-2 cursor-pointer'
          />
      </nav>
    )
}
