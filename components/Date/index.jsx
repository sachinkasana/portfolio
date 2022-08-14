import { format, parseISO } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <div className='inline-flex items-center space-x-1 text-xs sm:text-sm text-gray-700 dark:text-gray-400'>
      <span>Posted on:</span>
      <time dateTime={dateString}>{format(date, 'LLLL, d, yyyy')}</time>
    </div>
  )
}
