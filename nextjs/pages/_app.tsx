import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <nav className='py-4 px-12 border-b border-gray-300'>
        <Link href="/">
          <a >Home</a>
        </Link>
        <Link href="/profile">
          <a className='ml-4'>Profile</a>
        </Link>
        <Link href="#">
          <a className='ml-4'>Protected</a>
        </Link>
      </nav>
       <Component {...pageProps} />
    </div>
  )
}

export default MyApp
