import { FC } from 'react'
import Link from 'next/link'

interface ILinkExternalProps {
  href: string;
  title: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const LinkExternal: FC<ILinkExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target="_blank" rel="noopener noreferrer" className={"underline text-blue-900 focus:text-sky-500 hover:text-cyan-900 hover:no-underline " + className + " transition-all motion-reduce:transition-none motion-reduce:hover:transform-none"}>
      {children}
    </Link>
  )
}

export default LinkExternal