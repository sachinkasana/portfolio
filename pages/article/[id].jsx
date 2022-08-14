import { Container, Layout } from '@/layouts'
import { getArticleId, getArticles } from '@/libs/posts'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Typo from '@/components/Typography'
import Date from '@/components/Date'
import readingTime from 'reading-time'
import Head from 'next/head'
import Image from 'next/image'

export default function Article({ articleData: { shortDesc, title, imageSrc, imageAuthor, imageLink, date, contentHtml } }) {
  const { text } = readingTime(contentHtml)
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <meta name='description' content={shortDesc} />
        <meta name='keywords' content='rizkimcitra, Rizkimcitra, Rizki Maulana Citra,  portfolio, blogs, blog, portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Rizki Maulanna Citra' />
        <meta name='title' content={`Rizkimcitras' article | ${title}`} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={`https://rizkimcitra.vercel.app${asPath}`} />
        <meta property='og:title' content={`Rizkis' article | ${title}`} />
        <meta property='og:description' content={shortDesc} />
        <meta property='og:image' content={`https://rizkimcitra.vercel.app${imageSrc}`} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={`https://rizkimcitra.vercel.app${asPath}`} />
        <meta property='twitter:title' content={`Rizkis' article | ${title}`} />
        <meta property='twitter:description' content={shortDesc} />
        <meta property='twitter:image' content={`https://rizkimcitra.vercel.app${imageSrc}`} />

        <base target='_blank' rel='noopener noreferrer' />

        <title>{`Your Name article | ${title}`}</title>
      </Head>
      <Layout>
        <Header />
        <Container main article>
          <Button backBtn />
          <section className='py-2 sm:py-4 lg:py-12'>
            <figure className='select-none'>
              <Image
                loading='lazy'
                placeholder='blur'
                blurDataURL={imageSrc}
                className='rounded-lg object-cover'
                src={imageSrc}
                alt='Article Image'
                width={1200}
                height={720}
              />
              {/* Remove this if you have your own Image or Thumbnail */}
              <figcaption className='text-xs sm:text-sm text-gray-700 dark:text-gray-400'>
                Photo by{' '}
                <a href={imageLink} target='_blank' rel='noopener noreferrer'>
                  {imageAuthor}
                </a>{' '}
                on Unsplash
              </figcaption>
            </figure>

            <Typo Heading forArticle>
              {title}
            </Typo>

            <div className='flex items-center justify-between my-2 sm:my-4'>
              <Date dateString={date} />
              <span className='text-xs sm:text-sm text-gray-700 dark:text-gray-400'>{text}</span>
            </div>

            <article
              className='prose prose-sm dark:prose-dark sm:prose md:prose-lg lg:prose-xl lg:max-w-screen-2xl font-roboto'
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </section>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = getArticleId()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articleData = await getArticles(params.id)

  return {
    props: {
      articleData,
    },
  }
}
