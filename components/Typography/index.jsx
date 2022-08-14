const Typo = ({
  children,
  Title = false,
  SubTitle = false,
  Heading = false,
  SubHeading = false,
  Paragraph = false,
  marginBot = false,
  widthProse = false,
  hasWidth = false,
  forArticle = false,
  relaxed = false,
}) => {
  /*
  similiar to

  if(Title){
    // 
  }else if(SubTitle){
    // 
  } .....
  
  */
  return Title ? (
    <h1 className='text-lg sm:text-xl lg:text-3xl font-medium mb-2 sm:mb-4 lg:mb-6 underline text-gray-900 dark:text-gray-200'>{children}</h1>
  ) : SubTitle ? (
    <p
      className={`text-sm sm:text-base lg:text-lg w-full leading-relaxed font-medium text-gray-800 dark:text-gray-300 ${
        hasWidth ? 'md:w-9/12' : ''
      } ${marginBot ? 'mb-2 sm:mb-4 lg:mb-6' : ''} ${widthProse ? 'max-w-prose' : ''}`}>
      {children}
    </p>
  ) : Heading ? (
    forArticle ? (
      <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-roboto font-extrabold text-gray-900 dark:text-gray-200`}>{children}</h1>
    ) : (
      <h2
        className={`text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-4 lg:mb-6 font-smibold text-gray-900 dark:text-gray-200 ${
          marginBot ? 'mb-2 sm:mb-4 lg:mb-6' : ''
        }`}>
        {children}
      </h2>
    )
  ) : SubHeading ? (
    <h2 className={`text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-200 ${marginBot ? 'mb-1 sm:mb-2 lg:mb-4' : ''}`}>
      {children}
    </h2>
  ) : Paragraph ? (
    <p className={`text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 text-gray-800 dark:text-gray-300 ${relaxed ? 'leading-relaxed' : ''}`}>{children}</p>
  ) : null
}

export default Typo
