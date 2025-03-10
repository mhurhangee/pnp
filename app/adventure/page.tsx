"use client"

import { LandingCard } from "@/components/landing/landing-card"
import { LoadingScreen } from "@/components/loading/loading-screen"
import Footer from "@/components/landing/footer"

export default function SplashPage() {

  return (
    <LoadingScreen>
      <LandingCard />
      <Footer />
    </LoadingScreen>
  )
}