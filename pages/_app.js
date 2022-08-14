import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import Head from 'next/head'
import '@/styles/globals.css'

// this is progress bar to give user feedback if they change or switch between route
const progress = new ProgressBar({
  size: 2,
  className: 'bg-gradient-to-r from-blue-500 to-pink-500',
  delay: 0,
})

// we call the router event and use the progressbar as callback to run the progress bar
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='title' content='Rizkimcitra' />
        <meta name='description' content='Rizki Maulana Citra is a Front-end Developer based in Banten, Indonesia.' />
        <meta name='keywords' content='rizkimcitra, Rizkimcitra, Rizki Maulana Citra, portfolio, blogs, blog, portfolio' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='revisit-after' content='7 days' />
        <meta name='author' content='Rizki Maulanna Citra' />
        <meta name='publisher' content='vercel' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
