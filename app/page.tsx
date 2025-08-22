"use client"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { StudentDashboard } from "@/components/student-dashboard"
import { CourseDetails } from "@/components/course-details"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

interface MainAppProps {
  currentView?: "dashboard" | "courses" | "analytics"
  onViewChange?: (view: "dashboard" | "courses" | "analytics") => void
}

function MainApp({ currentView = "dashboard", onViewChange }: MainAppProps) {
  const renderCurrentView = () => {
    switch (currentView) {
      case "courses":
        return <CourseDetails onViewChange={onViewChange} />
      case "analytics":
        return <AnalyticsDashboard onViewChange={onViewChange} />
      default:
        return <StudentDashboard onViewChange={onViewChange} />
    }
  }

  return <div className="space-y-8">{renderCurrentView()}</div>
}

export default function Page() {
  return (
    <LayoutWrapper>
      <MainApp />
    </LayoutWrapper>
  )
}
