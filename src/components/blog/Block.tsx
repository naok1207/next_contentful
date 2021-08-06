const Block: React.FC<props> = ({children, className}) => {
  return (
    <div className={`p-3 border ${className ?? ''}`}>
      {children}
    </div>
  )
}

export { Block }