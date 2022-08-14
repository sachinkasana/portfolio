import { SiTailwindcss, SiBootstrap, SiTypescript, SiNextDotJs, SiCss3, SiHtml5, SiJavascript, SiReact, SiSass, SiNodeDotJs } from 'react-icons/si'
import { Layout, Container } from '@/layouts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Typo from '@/components/Typography'
import Head from 'next/head'
import Image from 'next/image'

// if you available in more stack, just add the data below, and also don't forget to import the icons from the react-icons above
// the color property is for tailwind utilities, change it to match the tech color as possible
const techs = [
  {
    icon: <SiHtml5 />,
    color: 'text-red-600',
    isExp: true,
  },
  {
    icon: <SiCss3 />,
    color: 'text-blue-500',
    isExp: true,
  },
  {
    icon: <SiSass />,
    color: 'text-pink-500',
    isExp: true,
  },
  {
    icon: <SiTailwindcss />,
    color: 'text-blue-400 dark:text-blue-300',
    isExp: true,
  },
  {
    icon: <SiJavascript />,
    color: 'text-yellow-500',
    isExp: true,
  },

  {
    icon: <SiReact />,
    color: 'text-blue-500 dark:text-blue-400',
    isExp: true,
  },
  {
    icon: <SiBootstrap />,
    color: 'text-purple-600 dark:text-purple-500',
    isExp: false,
  },
  {
    icon: <SiTypescript />,
    color: 'text-blue-600',
    isExp: false,
  },
  {
    icon: <SiNextDotJs />,
    color: 'text-gray-900 dark:text-gray-300',
    isExp: false,
  },
  {
    icon: <SiNodeDotJs />,
    color: 'text-green-600 dark:text-green-500',
    isExp: false,
  },
  {
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='1em' height='1em' color='currentColor' fill='currentColor'>
        <path d='M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z' />
      </svg>
    ),
    color: 'text-gray-900 dark:text-gray-300',
    isExp: false,
  },
]

export default function About() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content="A passionate Front-end Developer who has a dream to conquer the world with his bare hand. Hi, my name is Rizki Maulana Citra, I'm a Front-end Developer who currently learning Back-end to become Full-stack Developer."
        />
        <meta name='keywords' content='rizkimcitra, Rizkimcitra, Rizki Maulana Citra, Rizki Maulana Citra about, portfolio, blogs, blog, portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Rizki Maulanna Citra' />
        <meta name='title' content="Rizki Maulana Citra | Rizki's work" />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://rizkimcitra.vercel.app/about' />
        <meta property='og:title' content="Rizki Maulana Citra | Rizkis' about" />
        <meta
          property='og:description'
          content="A passionate Front-end Developer who has a dream to conquer the world with his bare hand. Hi, my name is Rizki Maulana Citra, I'm a Front-end Developer who currently learning Back-end to become Full-stack Developer."
        />
        <meta property='og:image' content='https://rizkimcitra.vercel.app/og-image/about.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://rizkimcitra.vercel.app/about' />
        <meta property='twitter:title' content="Rizki Maulana Citra | Rizkis' about" />
        <meta
          property='twitter:description'
          content="A passionate Front-end Developer who has a dream to conquer the world with his bare hand. Hi, my name is Rizki Maulana Citra, I'm a Front-end Developer who currently learning Back-end to become Full-stack Developer."
        />
        <meta property='twitter:image' content='https://rizkimcitra.vercel.app/og-image/about.png' />

        <title>Rizki Maulana Citra | Rizkis&apos; about</title>
      </Head>

      <Layout>
        <Header />
        <Container main>
          <Container section>
            <div className='w-full'>
              <Typo Title>About me</Typo>
              <Typo SubTitle widthProse>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, laborum sed, sequi odit voluptatum vitae aut dolor incidunt earum
                animi assumenda unde eligendi blanditiis beatae alias cupiditate vel! Omnis facere temporibus consequuntur aperiam?
              </Typo>
            </div>
            <div className='grid place-items-center w-full h-auto lg:h-full p-8 sm:p-0'>
              <Image
                title='Your Name'
                src='/profile.webp'
                width={328}
                height={328}
                alt='Your Name'
                className='object-cover rounded-full select-none opacity-90 dark:opacity-75 hover:opacity-100 transition'
              />
            </div>
          </Container>
          <Container section itemsPos='lg:items-center'>
            <div className='max-w-prose'>
              <Typo SubHeading>Tech Stack</Typo>
              <Typo Paragraph relaxed>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in, quas culpa fugit magni doloremque mollitia dolore totam itaque.
                Laborum debitis dolorem natus.
              </Typo>
              <IconWrapper>
                {techs
                  .filter(tech => tech.isExp === true)
                  .map(({ icon, color }, i) => (
                    <Icon key={i} color={color}>
                      {icon}
                    </Icon>
                  ))}
              </IconWrapper>
              <Typo Paragraph relaxed>
                I&apos;m familiar with
              </Typo>
              <IconWrapper>
                {techs
                  .filter(tech => tech.isExp === false)
                  .map(({ icon, color }, i) => (
                    <Icon key={i} color={color}>
                      {icon}
                    </Icon>
                  ))}
              </IconWrapper>
            </div>

            <div className='max-w-prose lg:pl-6 2xl:pl-0'>
              <Typo SubHeading>Biography</Typo>
              <Typo Paragraph relaxed>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo, consequatur itaque perferendis aperiam nisi omnis placeat magni
                nemo, iusto, reprehenderit quibusdam! Dolor, illo.
              </Typo>
              <Typo Paragraph relaxed>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste alias enim amet possimus maiores vero id odio, explicabo quasi vel
                officiis nobis rerum veritatis nisi quos eveniet nostrum hic! Eveniet quasi totam quidem!
              </Typo>
            </div>
          </Container>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

function IconWrapper({ children }) {
  return <div className='flex items-center space-x-2 sm:space-x-4 mt-0.5 sm:mt-1 mb-1 sm:mb-2'>{children}</div>
}

function Icon({ children, color = 'text-gray-800 dark:text-gray-200' }) {
  return <span className={`text-lg sm:text-2xl lg:text-3xl ${color}`}>{children}</span>
}
