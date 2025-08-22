"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BookOpen, Trophy, Calendar, Play, Bell, ChevronRight, Star, Target } from "lucide-react"

interface StudentDashboardProps {
  onViewChange?: (view: "dashboard" | "courses" | "analytics") => void
}

export function StudentDashboard({ onViewChange }: StudentDashboardProps) {
  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Dr. Sarah Chen",
      progress: 75,
      thumbnail: "/placeholder-vnm2c.png",
      nextLesson: "React Server Components",
      duration: "2h 30m remaining",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Prof. Michael Rodriguez",
      progress: 45,
      thumbnail: "/machine-learning-algorithms.png",
      nextLesson: "Neural Networks Basics",
      duration: "4h 15m remaining",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Thompson",
      progress: 90,
      thumbnail: "/modern-ui-ux.png",
      nextLesson: "Final Project Review",
      duration: "30m remaining",
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      instructor: "Dr. James Wilson",
      progress: 30,
      thumbnail: "/data-structures-algorithms-visualization.png",
      nextLesson: "Binary Trees",
      duration: "6h 45m remaining",
    },
  ]

  const upcomingEvents = [
    {
      type: "live-session",
      title: "React Advanced Patterns Workshop",
      time: "Today, 2:00 PM",
      instructor: "Dr. Sarah Chen",
      participants: 45,
    },
    {
      type: "deadline",
      title: "ML Project Submission",
      time: "Tomorrow, 11:59 PM",
      course: "Machine Learning Fundamentals",
    },
    {
      type: "live-session",
      title: "Design System Review",
      time: "Friday, 10:00 AM",
      instructor: "Emma Thompson",
      participants: 32,
    },
  ]

  const announcements = [
    {
      title: "New Course: Advanced TypeScript",
      content: "Enroll now for our latest TypeScript course starting next week.",
      time: "2 hours ago",
      priority: "high",
    },
    {
      title: "System Maintenance",
      content: "Scheduled maintenance on Sunday 2-4 AM EST.",
      time: "1 day ago",
      priority: "medium",
    },
    {
      title: "Study Group Formation",
      content: "Join study groups for better collaborative learning.",
      time: "3 days ago",
      priority: "low",
    },
  ]

  const achievements = [
    { title: "Quick Learner", description: "Completed 3 courses in one month", icon: "⚡", earned: true },
    { title: "Discussion Leader", description: "Top contributor in course forums", icon: "💬", earned: true },
    { title: "Perfect Attendance", description: "Attended all live sessions this month", icon: "🎯", earned: false },
    { title: "Code Master", description: "Submitted 10 coding assignments", icon: "💻", earned: true },
  ]

  const learningPath = [
    { title: "Frontend Fundamentals", completed: true, courses: 4 },
    { title: "Advanced React", completed: false, courses: 3, current: true },
    { title: "Full Stack Development", completed: false, courses: 5 },
    { title: "System Design", completed: false, courses: 3 },
  ]

  const studyGroups = [
    { name: "React Developers", members: 24, nextMeeting: "Today 3:00 PM", topic: "Hooks Deep Dive" },
    { name: "ML Enthusiasts", members: 18, nextMeeting: "Tomorrow 2:00 PM", topic: "Neural Networks" },
    { name: "Design Systems", members: 12, nextMeeting: "Friday 4:00 PM", topic: "Component Libraries" },
  ]

  const skillsProgress = [
    { skill: "React Development", level: 85, target: 90 },
    { skill: "Machine Learning", level: 60, target: 80 },
    { skill: "System Design", level: 45, target: 70 },
    { skill: "Data Analysis", level: 70, target: 85 },
  ]

  const certifications = [
    { name: "AWS Cloud Practitioner", progress: 80, deadline: "Dec 15, 2024", status: "in-progress" },
    { name: "React Professional", progress: 100, deadline: "Completed", status: "completed" },
    { name: "Machine Learning Specialist", progress: 35, deadline: "Jan 30, 2025", status: "in-progress" },
  ]

  const teamStats = {
    departmentRank: 3,
    totalMembers: 24,
    teamProgress: 72,
    collaborativeProjects: 5,
  }

  const recommendations = [
    { title: "Advanced TypeScript Patterns", reason: "Based on your React progress", priority: "high" },
    { title: "Cloud Architecture Fundamentals", reason: "Complements your current learning path", priority: "medium" },
    { title: "Leadership in Tech", reason: "Recommended for senior developers", priority: "low" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <Trophy className="w-3 h-3 mr-1" />
            Level 7 Learner
          </Badge>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 active courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">3 new this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Path Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Learning Path</span>
          </CardTitle>
          <CardDescription>Your personalized learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningPath.map((path, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    path.completed
                      ? "bg-green-500 text-white"
                      : path.current
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {path.completed ? "✓" : index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{path.title}</h3>
                  <p className="text-sm text-muted-foreground">{path.courses} courses</p>
                </div>
                {path.current && <Badge variant="default">Current</Badge>}
                {path.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-8">
          {/* My Courses Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription>Continue your learning journey</CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => onViewChange?.("courses")}
                  className="flex items-center space-x-2"
                >
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {courses.map((course) => (
                  <Card key={course.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">by {course.instructor}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Next: {course.nextLesson}</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Skills Development</span>
              </CardTitle>
              <CardDescription>Track your professional skill growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillsProgress.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        <Badge variant="outline" className="text-xs">
                          Target: {skill.target}%
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div className="absolute top-0 h-2 w-0.5 bg-primary/60" style={{ left: `${skill.target}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Certification Progress</span>
              </CardTitle>
              <CardDescription>Professional certifications and credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        cert.status === "completed" ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {cert.status === "completed" ? "✓" : `${cert.progress}%`}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">Deadline: {cert.deadline}</p>
                      {cert.status === "in-progress" && <Progress value={cert.progress} className="h-2 mt-2" />}
                    </div>
                    <Badge variant={cert.status === "completed" ? "default" : "secondary"}>
                      {cert.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Team Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">#{teamStats.departmentRank}</div>
                <p className="text-sm text-muted-foreground">Department Rank</p>
                <p className="text-xs text-muted-foreground">out of {teamStats.totalMembers} members</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Team Progress</span>
                  <span className="text-sm font-medium">{teamStats.teamProgress}%</span>
                </div>
                <Progress value={teamStats.teamProgress} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Collaborative Projects</span>
                  <span>{teamStats.collaborativeProjects} active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Recommended for You</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50 space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium">{rec.title}</h4>
                    <Badge variant={rec.priority === "high" ? "default" : "secondary"} className="text-xs">
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{rec.reason}</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Explore Course
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Recent Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                  }`}
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Upcoming</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-shrink-0">
                    {event.type === "live-session" ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    ) : (
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                    {event.type === "live-session" && (
                      <div className="flex items-center space-x-2 mt-1">
                        <Avatar className="h-4 w-4">
                          <AvatarFallback className="text-xs">
                            {event.instructor
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">
                          {event.instructor} • {event.participants} participants
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Study Groups Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Study Groups</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studyGroups.map((group, index) => (
                <div key={index} className="p-3 rounded-lg bg-muted/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{group.name}</h4>
                    <Badge variant="outline">{group.members} members</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Next: {group.nextMeeting}</p>
                  <p className="text-xs font-medium">Topic: {group.topic}</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Join Meeting
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Announcements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium">{announcement.title}</h4>
                    <Badge
                      variant={
                        announcement.priority === "high"
                          ? "destructive"
                          : announcement.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{announcement.content}</p>
                  <p className="text-xs text-muted-foreground">{announcement.time}</p>
                  {index < announcements.length - 1 && <hr className="my-3" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
