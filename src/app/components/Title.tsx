interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title: React.FC<TitleProps> = (props): React.ReactNode => {
  return <p {...props}>{props.children}</p>
}

export default Title
