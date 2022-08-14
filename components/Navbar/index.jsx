import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/layouts'
const staticMenu = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Article',
    href: '/article',
  },
  {
    text: 'Work',
    href: '/work',
  },
  {
    text: 'About',
    href: '/about',
  },
]

const NavLink = ({ children, href = '/' }) => {
  const { asPath } = useRouter()

  const activeClassName = asPath === href ? 'text-blue-500 dark:text-pink-500 underline' : ''
  const className =
    asPath === href
      ? 'w-full py-2 px-4 sm:py-4 sm:px-6 lg:py-1 lg:px-2 text-xs sm:text-sm md:text-base hover:text-blue-500 dark:hover:text-pink-500'
      : 'w-full py-2 px-4 sm:py-4 sm:px-6 lg:py-1 lg:px-2 text-xs sm:text-sm md:text-base text-gray-900 hover:text-blue-500 dark:text-gray-300 dark:hover:text-pink-500'

  return (
    <Link href={href}>
      <a className={`${className} ${activeClassName}`}>{children}</a>
    </Link>
  )
}

// the refhook is the reference hook or `useRef` hook from react
// query is from the useRouter hook from nextjs
export default function Navbar ({ refHook, query })  {
  return (
    <Container refHook={refHook} nav>
      {query.id
        ? null
        : staticMenu.map(({ href, text }, i) => (
            <NavLink href={href} key={i}>
              {text}
            </NavLink>
          ))}
    </Container>
  )
}
