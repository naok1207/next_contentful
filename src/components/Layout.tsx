import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
