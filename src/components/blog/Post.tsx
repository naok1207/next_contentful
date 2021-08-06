import { Block, Contents } from 'components/blog'

const Post: React.FC = (props) => {
  return (
    <Block className={props.className} >
      <Contents className="col-span-3" />
      {props.children}
    </Block>
  )
}

export { Post }
