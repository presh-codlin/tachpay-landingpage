import Image from "next/image"

export const Logo = ({className}: {className: string}) => {
  return (
    <div className={`relative ${className}`}>
      <Image src="./Coloured.svg" fill alt="logo"/>
    </div>
  )
}