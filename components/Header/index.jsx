import { BiMoon, BiMenu, BiSun } from 'react-icons/bi'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Container } from '@/layouts'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Header() {
  const navRef = useRef()
  const [isDark, setIsDark] = useState(true)
  const { query } = useRouter()

  // to get the navbar in a smaller screen
  // the parameter represent a ref hook of navbar
   const toggleNav = () => {
    navRef.current.classList.toggle('-top-52')
    navRef.current.classList.toggle('top-14')
    navRef.current.classList.toggle('sm:top-20')
    setTimeout(() => {
      navRef.current.classList.toggle('opacity-0')
      navRef.current.classList.toggle('opacity-100')
    }, 10)
  }

  // this is just toggling between dark mode and light, adding class 'light' or 'dark' to the html element
   const setColor = () => {
    const htmlClassName = localStorage.getItem('NJP_ColorTheme')
    const html = document.documentElement
    if (htmlClassName) html.className = htmlClassName
  }

  // this is the reference for toggling between dark mode and light, adding class 'light' or 'dark' to the html element
  // isDark is the state hook, and setIsDark is the dispatch action from useState hook,
   const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      localStorage.removeItem('NJP_ColorTheme')
      localStorage.setItem('NJP_ColorTheme', 'dark')
      setColor()
    } else {
      localStorage.removeItem('NJP_ColorTheme')
      localStorage.setItem('NJP_ColorTheme', 'ligth')
      setColor()
    }
  }

  // check of what we get from localstorage
  // this used to prevent double click to swicth between dark mode
  useEffect(() => {
    if (localStorage.getItem('NJP_ColorTheme') === 'dark') {
      setIsDark(false)
      setColor()
    } else {
      setIsDark(true)
      setColor()
    }
  }, [])

  return (
    <Container header>
      <Link href='/'>
        <a className='text-lg sm:text-xl lg:text-2xl font-medium hover:text-blue-500 dark:hover:text-pink-500 text-gray-900 dark:text-gray-200'>
          Sachin kasana
        </a>
      </Link>

      <Container navContainer>
        <Navbar refHook={navRef} query={query} />
        <Container btnWrapper>
          <BtnToggler onEvent={toggleTheme}>{isDark ? <BiMoon /> : <BiSun />}</BtnToggler>
          {query.id ? null : (
            <BtnToggler classes='lg:hidden' onEvent={toggleNav}>
              <BiMenu />
            </BtnToggler>
          )}
        </Container>
      </Container>
    </Container>
  )
}


function BtnToggler ({ children, classes = '', onEvent }){
  return (
    <div
      onClick={onEvent}
      className={`grid place-items-center w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base lg:text-lg rounded-full cursor-pointer text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${classes}`}>
      {children}
    </div>
  )
}