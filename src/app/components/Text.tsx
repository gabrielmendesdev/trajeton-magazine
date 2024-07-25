interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props): React.ReactNode => {
  return <p {...props}>{props.children}</p>
}

export default Text
