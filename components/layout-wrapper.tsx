"use client"

import React, { useState } from "react"
import { Navigation } from "./navigation"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [currentView, setCurrentView] = useState<"dashboard" | "courses" | "analytics">("dashboard")

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-6 py-8">
        {React.cloneElement(children as React.ReactElement, { currentView, onViewChange: setCurrentView })}
      </main>
    </div>
  )
}
