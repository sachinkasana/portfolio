export const Layout = ({ children }) => {
  return <div className={`max-w-5xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-0`}>{children}</div>
}

export const ArticleWrapper = ({ children, grid }) => (
  <div
    className={`${grid ? 'grid' : 'block'} grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-1 sm:gap-2 sm:gap-y-4 lg:gap-x-4 lg:gap-y-8 2xl:gap-y-12`}>
    {children}
  </div>
)

export const ArticleItem = ({ children, isArticle = false }) => {
  return (
    <article className={`w-full h-full p-4 sm:p-6 lg:p-8 ${isArticle ? '' : 'rounded-lg shadow dark:shadow-none bg-white dark:bg-gray-800'}`}>
      {children}
    </article>
  )
}

export const Button = ({ children, event }) => (
  <div
    onClick={event}
    className='grid place-items-center w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base lg:text-lg rounded-full cursor-pointer text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
    {children}
  </div>
)

export const Container = ({
  children,
  header = false,
  navContainer = false,
  nav = false,
  btnWrapper = false,
  footer = false,
  grid = false,
  gridItem = false,
  main = false,
  article = false,
  hasGrid = false,
  section = false,
  itemsPos = 'items-center',
  refHook = undefined,
}) => {
  /*
  similiar to

  if(header){
    // 
  }else if(navContainer){
    // 
  } .....

  */
  return header ? (
    <header className='relative flex items-center justify-between w-full h-16 sm:h-24 lg:h-32 z-50'>{children}</header>
  ) : navContainer ? (
    <div className='flex items-center space-x-2'>{children}</div>
  ) : nav && refHook ? (
    <nav
      ref={refHook}
      className='absolute -top-52 left-0 opacity-0 lg:opacity-100 lg:static lg:transform-none flex flex-col lg:flex-row lg:items-center w-full lg:space-x-2 rounded-md lg:rounded-none shadow-lg dark:shadow-none lg:shadow-none bg-white lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent'>
      {children}
    </nav>
  ) : btnWrapper ? (
    <div className='flex items-center space-x-1 sm:space-x-2 lg:space-x-3.5'>{children}</div>
  ) : footer ? (
    <footer className='py-4 px-8 sm:py-16 sm:px-32 grid place-items-center border-t border-gray-300 dark:border-gray-700'>{children}</footer>
  ) : main ? (
    hasGrid ? (
      <main className='w-full grid place-items-center h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem) lg:h-[calc(100vh-8rem)]]'>{children}</main>
    ) : article ? (
      <main className='max-w-5xl mx-auto px-4 sm:px-8 lg:px-0'>{children}</main>
    ) : (
      <main className='space-y-8 sm:space-y-16 lg:space-y-24 my-4 sm:my-10 lg:my-28'>{children}</main>
    )
  ) : grid ? (
    <div className='flex flex-col lg:flex-row lg:items-center -mt-12 lg:-mt-28 space-y-4 sm:space-y-8 lg:space-y-0'>{children}</div>
  ) : gridItem ? (
    <div className='grid place-items-center w-full'>{children}</div>
  ) : section ? (
    <section className={`w-full flex flex-col-reverse lg:flex-row ${itemsPos} lg:justify-between`}>{children}</section>
  ) : null
}
