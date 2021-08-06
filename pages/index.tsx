import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from 'components/Layout'
import styles from 'styles/Home.module.scss'
import logo from 'public/logo@2x.png'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div className={`flex-grow flex-shrink-0 grid place-content-center place-items-center ${styles.hero}`}>
        <figure className="max-w-3xl">
          <Image src={logo} alt="NextSSS Logo" />
        </figure>
        <h1 className="mt-10 font-extrabold text-center">Hello, World!</h1>
      </div>
      <p>
        <Link href="/home/intro">
          <a>Go to Author Introduction</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Go to posts</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Home
