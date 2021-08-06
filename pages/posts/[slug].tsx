import { NextSeo } from 'next-seo'
import { getAllPosts, getPostBySlug } from 'lib/contentful'
import BlogLayout from 'components/blog/BlogLayout'
import { Markdown } from 'components/blog'
import Link from 'next/link'

const SlugPost: React.FC = ({ post }) => {
  return (
    <BlogLayout>
      <NextSeo
        title={post.fields.title}
        description={post.fields.body.slice(0, 300)}
        openGraph={{
          type: 'website',
        }}
      />
      <Link href={`/posts/`}>
        <a>
          {'<'} Back to Posts Index
        </a>
      </Link>
      <Markdown 
        title={post.fields.title} 
        source={post.fields.body} 
      />
    </BlogLayout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  //paramsのスラッグを元に個別投稿を取得する
  const post = await getPostBySlug(slug);
  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {

  //全記事の取得
  const allPosts = await getAllPosts();

  //存在するスラッグを抽出してSSGするページを明示する
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.fields.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default SlugPost