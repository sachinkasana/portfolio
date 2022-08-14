import { BiRightArrowAlt, BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

export default function Button({ children, homeBtn = false, href, isBlank = false, backBtn = false, iconOnly = false, color = '' }) {
  return homeBtn ? (
    isBlank ? (
      <Link href={href}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className={`grid place-items-center w-full py-2 sm:py-3 lg:py-3 text-sm sm:text-base lg:text-lg rounded-md ${color}`}>
          {children}
        </a>
      </Link>
    ) : (
      <Link href={href}>
        <a className={`grid place-items-center w-full py-2 sm:py-3 lg:py-3 text-sm sm:text-base lg:text-lg rounded-md ${color}`}>{children}</a>
      </Link>
    )
  ) : backBtn ? (
    <Link href='/article'>
      <a className='group inline-flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm mb-2 sm:mb-4 lg:mb-6 text-gray-700 hover:text-blue-500 dark:text-gray-400 dark:hover:text-pink-500 duration-150'>
        <span className='group-hover:-translate-x-1'>
          <BiArrowBack />
        </span>
        <span>Back</span>
      </a>
    </Link>
  ) : iconOnly ? (
    <a
      href={href}
      title='see on GitHub'
      target='_blank'
      rel='noopener noreferrer'
      className='inline-grid place-items-center p-2 text-sm sm:text-base lg:text-lg rounded-full text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'>
      {children}
    </a>
  ) : (
    <Link href={href}>
      <a className='group inline-flex items-center space-x-1 py-2 sm:py-2.5 px-4 sm:px-8 text-xs sm:text-sm lg:text-base rounded-md bg-blue-500 dark:bg-pink-500 text-white'>
        <span>{children}</span>
        <span className='group-hover:translate-x-1'>
          <BiRightArrowAlt />
        </span>
      </a>
    </Link>
  )
}
