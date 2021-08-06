import { NextSeo } from 'next-seo'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import Link from 'next/link'

const Intro: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Introduction"
        description="Next.js test blog author Introduction"
        openGraph={{
          type: 'website',
        }}
      />
      <div className="p-10">
      </div>
      <figure className="bg-gray-100 rounded-xl p-8">
        <img className="w-32 h-32 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/49236312?s=400&u=b3e35241404d96f735c7ff9a451276793687d44e&v=4" alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “This is my Test blog Introduction”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">
              Naoki
            </div>
            <div className="text-gray-500">
              1998/12/07
            </div>
          </figcaption>
        </div>
      </figure>
      <Link href="/">
        <a>
          {'<'} Back to root
        </a>
      </Link> 
    </>
  )
}

export default Intro