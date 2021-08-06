import { Author, Block, Contents, Tag } from 'components/blog'

const Sidebar: React.FC = (props) => {
  return (
    <Block className={props.className}>
      <Author />
      <Contents className="hidden md:block" />
      <Tag />
    </Block>
  )
}

export { Sidebar }
