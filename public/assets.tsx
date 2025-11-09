import Image from "next/image"

export const Logo = ({className, src}: {className: string; src:string}) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} fill alt="logo"/>
    </div>
  )
}