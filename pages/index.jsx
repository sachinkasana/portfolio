/* eslint-disable @next/next/no-img-element */
import { Container, Layout } from '@/layouts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Typo from '@/components/Typography'
import Button from '@/components/Button'
import Head from 'next/head'

// put your link here, it's free on you if you want to share your resume or change to other purpose such as github link, etc
let myButtons = [
  {
    text: 'Resume',
    href: 'put your resume link here',
    color: 'text-white bg-blue-500 hover:bg-blue-400 dark:bg-pink-500 dark:hover:bg-pink-400',
    isBlank: true,
  },
  {
    text: 'Works',
    href: '/work',
    color: 'text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600',
    isBlank: false,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <meta name='keywords' content='rizkimcitra, Rizkimcitra, Sachin kasana,  portfolio, blogs, blog, portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Rizki Maulanna Citra' />
        <meta
          name='description'
          content="Hi, my Name is Sachin kasana, I'm a Full-stack Developer based in Banten, Indonesia. I love about JavaScript world, and it's ecosystem including Full-stack and Back-end, I'm also a student in Academy Information and Computer Management Serang, nice to meet you!"
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sachinkasana.vercel.app/' />
        <meta property='og:title' content='Sachin kasana | Homepage' />
        <meta
          property='og:description'
          content="Hi, my Name is Sachin kasana, I'm a Full-stack Developer based in Banten, Indonesia. I love about JavaScript world, and it's ecosystem including Full-stack and Back-end, I'm currently studying in Academy Information and Computer Management Serang, nice to meet you!"
        />
        <meta property='og:image' content='https://sachinkasana.vercel.app/og-image/homepage.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://sachinkasana.vercel.app/' />
        <meta property='twitter:title' content='Sachin kasana | Homepage' />
        <meta
          property='twitter:description'
          content="Hi, my Name is Sachin kasana, I'm a Full-stack Developer based in Banten, Indonesia. I love about JavaScript world, and it's ecosystem including Full-stack and Back-end, I'm currently studying in Academy Information and Computer Management Serang, nice to meet you!"
        />
        <meta property='twitter:image' content='https://sachinkasana.vercel.app/og-image/homepage.png' />
        <title>Sachin kasana | Homepage</title>
      </Head>

      <Layout>
        <Header />
        <Container hasGrid main>
          <Container grid>
            <Container gridItem>
              <img
                title='Sachin kasana'
                className='w-3/5 sm:w-2/5 lg:w-1/2 rounded-full opacity-90 dark:opacity-75 hover:opacity-100 transition'
                src='/profile.webp'
                alt='Sachin kasana'
              />
            </Container>

            <Container gridItem>
              <div className='w-full'>
                <Typo Title>A Short Introduction</Typo>
                <Typo SubTitle hasWidth marginBot>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sequi laudantium quisquam. Dicta, quos incidunt ipsam sapiente
                  dignissimos ipsa ipsum consequatur pariatur veniam autem quo eius excepturi quod eveniet rem possimus dolor obcaecati.
                </Typo>

                <div className='w-full lg:w-1/2 flex items-stretch space-x-1 sm:space-x-2'>
                  {myButtons.map(({ href, color, text, isBlank }, i) => (
                    <Button href={href} color={color} key={i} isBlank={isBlank} homeBtn>
                      {text}
                    </Button>
                  ))}
                </div>
              </div>
            </Container>
          </Container>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
