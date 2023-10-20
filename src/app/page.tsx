'use client'

import { InfoSection } from "@/components/home/InfoSection"
import Image from "next/image"

export default function Home() {

  return (
    <div className="page-container home-container">
      <InfoSection />
      <Image className="image" width={700} height={100} src="/images/home-logo.png" alt="Home Logo"/>
    </div>
  )
}
