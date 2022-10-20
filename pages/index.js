import Image from 'next/image'

export default function Home() {
  return (
    <div>
    <Image src="/d_main.jpg" width={500} height={400} layout="responsive"/>
    </div>
  )
}
