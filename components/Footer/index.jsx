import { SiFacebook, SiGithub, SiNextDotJs, SiTelegram } from 'react-icons/si'
import { Container } from '@/layouts'
import { IoHeart } from 'react-icons/io5'

// you can add another social media such as instagram, just dupllcate the component, and import the logo of the platform from react-icons
// if you want to add icons, add Si on every platform name, as you can see above import, such as SiFacebook
const yourEmailAddrress = 'youremail@mail.com'
const yourGitHubLink = 'https://yourgithublink'
const yourFacebookLink = 'https://yourfacebookname'
const yourTelegramLink = 'https://yourtelegramlink'

export default function Footer() {
  return (
    <Container footer>
      <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8'>
        <Item href={yourGitHubLink} icon={<IoHeart />} color='text-red-500 dark:text-red-400'>
          Made with
        </Item>
        <Item href='https://nextjs.org/' icon={<SiNextDotJs />}>
          Build with
        </Item>
      </div>

      <a
        href={`mailto:${yourEmailAddrress}?subject=change this subject as you like`}
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm sm:text-base text-gray-800 dark:text-gray-300 text-center mt-2 mb-4 underline'>
        {yourEmailAddrress}
      </a>

      <p className='text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-300 text-center mt-2 mb-4'>Reach me out on</p>
      <div className='flex items-center space-x-2 sm:space-x-4 lg:space-x-6 justify-center'>
        <Link href={yourGitHubLink}>
          <SiGithub />
        </Link>
        <Link color='text-blue-400' href={yourFacebookLink}>
          <SiFacebook />
        </Link>
        <Link color='text-blue-500' href={yourTelegramLink}>
          <SiTelegram />
        </Link>
      </div>
    </Container>
  )
}

function Item({ children, href, icon, color = 'text-gray-800 dark:text-gray-300' }) {
  return (
    <div className='flex items-center space-x-2'>
      <span className='text-sm sm:text-base lg:text-lg text-gray-900 dark:text-gray-300'>{children}</span>
      <a href={href} target='_blank' rel='noopener noreferrer' className={color}>
        {icon}
      </a>
    </div>
  )
}

function Link({ children, href = '', color = 'text-gray-900 dark:text-gray-300' }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={`text-sm sm:text-base lg:text-lg hover:scale-110 ${color}`}>
      {children}
    </a>
  )
}
