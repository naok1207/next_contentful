import { NextSeo } from 'next-seo'
import { getAllPosts } from 'lib/contentful'
import Layout from 'components/Layout'
import Link from 'next/link'

const PostsIndex: React.FC = ({ allPosts }) => {
  const posts = allPosts
  return (
    <Layout>
      <NextSeo
        title="Introduction"
        description="Next.js test blog author Introduction"
        openGraph={{
          type: 'website',
        }}
      />
      <ul>
        {
          posts.map(({ fields }) => (
            <li>
              <Link href={`/posts/${fields.slug}`}>
                <a>
                  {fields.title}
                </a>
              </Link>
            </li>
          ))
        }   
      </ul>   
      <Link href={`/`}>
        <a>
          {'<'} Back to Posts root
        </a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: { allPosts },
  }
}

export default PostsIndex