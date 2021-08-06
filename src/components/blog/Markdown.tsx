import { Block } from 'components/blog'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
/*
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'


const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}
*/

const Markdown: React.FC = (props) => {  
  return (
    <Block>
      <ReactMarkdown 
        className="markdown" 
        {/* components={components} */
        remarkPlugins={[gfm]}
        children={props.source} 
      />
    </Block>
  )
}

export { Markdown }
