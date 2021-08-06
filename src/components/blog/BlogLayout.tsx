import { ReactNode } from 'react'
import { Post, Sidebar } from 'components/blog'

type Props = {
  children?: ReactNode
}

const BlogLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container md:container md:max-w-6xl mx-auto grid grid-cols-3 gap-4">
      <Post className="col-span-3 md:col-span-2">
        {children}
      </Post>
      <Sidebar className="col-span-3 md:col-span-1" />
    </div>
  )
}

export default BlogLayout