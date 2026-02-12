// src/components/HomeClient.tsx
"use client"

import dynamic from "next/dynamic"

// Dynamically import heavy components (client only)
const AnimatedBackground = dynamic(
  () => import("@/components/ui/AnimatedBackground"),
  { ssr: false }
)

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress"),
  { ssr: false }
)

const ScrollMarquee = dynamic(
  () => import("@/components/ui/ScrollMarquee"),
  { ssr: false }
)

export default function HomeClient() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <ScrollMarquee />
    </>
  )
}
