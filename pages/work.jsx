import { Layout, ArticleWrapper, ArticleItem, Container } from '@/layouts'
import { IoEyeOutline, IoLogoGithub } from 'react-icons/io5'
import Typo from '@/components/Typography'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Head from 'next/head'

// of course you can use the gray matter to do the same thing as the `article` do, but i will be put the data here instead
const staticData = [
  {
    title: 'Your Project name',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia doloribus magni eos odit corrupti, tempore consequuntur quod rem doloremqu voluptate dolor suscipit quam quia nisi numquam consequatur obcaecati laboriosam, error omnis laudantium eaque?',
    techs: ['JavaSript', 'TypeScript', 'NestJS', 'etc.'],
    ghLink: 'https://toyourgithublink.com',
    // change the demolink if you have one
    demoLink: 'https://putthedemolinkhere.com',
  },
]

export default function Work() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='I often to create some project and do having fun with Web Development such as JavaScript, React, NextJS and CSS, so I will post
              something I do with it here, some maybe useful for you.'
        />
        <meta name='keywords' content='rizkimcitra, Rizkimcitra, Rizki Maulana Citra, portfolio, Rizki Maulana Citra works, portfolio, Portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Rizki Maulanna Citra' />
        <meta name='title' content="Rizki Maulana Citra | Rizkis' work" />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://rizkimcitra.vercel.app/work' />
        <meta property='og:title' content="Rizki Maulana Citra | Rizkis' Work" />
        <meta
          property='og:description'
          content='I often to create some project and do having fun with Web Development such as JavaScript, React, NextJS and CSS, so I will post something I do with it here, some maybe useful for you.'
        />
        <meta property='og:image' content='https://rizkimcitra.vercel.app/og-image/work.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://rizkimcitra.vercel.app/' />
        <meta property='twitter:title' content="Rizki Maulana Citra | Rizkis' Work" />
        <meta
          property='twitter:description'
          content='I often to create some project and do having fun with Web Development such as JavaScript, React, NextJS and CSS, so I will post
              something I do with it here, some maybe useful for you.'
        />
        <meta property='twitter:image' content='https://rizkimcitra.vercel.app/og-image/work.png' />

        <title>Rizki Maulana Citra | Rizkis&apos; works</title>
      </Head>
      <Layout>
        <Header />
        <Container main>
          <section className='w-full'>
            <Typo Title>My works</Typo>

            <Typo SubTitle hasWidth widthProse>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur fugiat amet voluptate voluptatem quas ab velit illum vero
              dolorem praesentium qui distinctio cum, beatae voluptatum veniam, error adipisci totam asperiores tempora iure.
            </Typo>
          </section>

          <section className='w-full sm:px-2 lg:px-4'>
            <Typo Heading marginBot>
              Latest activity
            </Typo>

            <ArticleWrapper grid>
              {staticData.map(({ demoLink, desc, ghLink, techs, title }, i) => (
                <ArticleItem key={i}>
                  <Typo SubHeading marginBot>
                    {title}
                  </Typo>
                  <Typo Paragraph leading>
                    {desc}
                  </Typo>
                  {/* if you want to feature the tech or something else that in the list, this will be displayed other than that, would be null */}
                  {techs.length ? (
                    <ul className='list-inside list-disc mb-1 sm:mb-2 lg:mb-4'>
                      {techs.map((item, i) => (
                        <li
                          key={i}
                          className='text-xs sm:text-sm lg:text-base marker:text-blue-500 dark:marker:text-pink-500 text-gray-700 dark:text-gray-400'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className='flex items-center space-x-1 sm:space-x-1.5'>
                    <Button iconOnly href={ghLink}>
                      <IoLogoGithub />
                    </Button>
                    {/* if you have demo link then this will be displayed */}
                    {demoLink ? (
                      <Button iconOnly href={ghLink}>
                        <IoEyeOutline />
                      </Button>
                    ) : null}
                  </div>
                </ArticleItem>
              ))}
            </ArticleWrapper>
          </section>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
