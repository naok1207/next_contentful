import { Block } from 'components/blog'

const Author: React.FC = () => {
  return (
    <Block className="">
      <img className="w-32 h-32 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/49236312?s=400&u=b3e35241404d96f735c7ff9a451276793687d44e&v=4" alt="" />
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            Author Comments
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            name
          </div>
          <div className="text-gray-500">
            1998/12/07
          </div>
        </figcaption>
      </div>
    </Block>
  )
}

export { Author }
