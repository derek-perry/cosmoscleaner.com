import { FC } from 'react'
import Link from 'next/link'

interface ICardProps {
  children?: JSX.Element[] | JSX.Element | string;
  className?: string;
}

const Card: FC<ICardProps> = ({
  children,
  className
}): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_SITE_URL || ""

  return (
    <div className={"shadow rounded-lg min-h-[250px] min-w-[250px] p-4 flex flex-col gap-2 justify-top text-center " + className}>
      {children}
    </div>
  )
}

export default Card