interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title: React.FC<TitleProps> = (props): React.ReactNode => {
  return <h1 {...props}>{props.children}</h1>
}

export default Title
