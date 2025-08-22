"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  CheckCircle,
  Circle,
  Clock,
  Users,
  FileText,
  Download,
  Send,
  ChevronLeft,
  Star,
  BookOpen,
  MessageCircle,
} from "lucide-react"

interface CourseDetailsProps {
  onViewChange?: (view: "dashboard" | "courses" | "analytics") => void
}

export function CourseDetails({ onViewChange }: CourseDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [chatMessage, setChatMessage] = useState("")

  const courseData = {
    title: "Advanced React Development",
    instructor: "Dr. Sarah Chen",
    rating: 4.8,
    students: 2847,
    duration: "12 weeks",
    progress: 75,
    description:
      "Master advanced React concepts including hooks, context, performance optimization, and modern patterns.",
  }

  const lessons = [
    { id: 1, title: "Introduction to Advanced React", duration: "15:30", status: "completed" },
    { id: 2, title: "Custom Hooks Deep Dive", duration: "22:45", status: "completed" },
    { id: 3, title: "Context API Best Practices", duration: "18:20", status: "completed" },
    { id: 4, title: "React Server Components", duration: "25:10", status: "current" },
    { id: 5, title: "Performance Optimization", duration: "20:15", status: "locked" },
    { id: 6, title: "Testing Strategies", duration: "19:30", status: "locked" },
    { id: 7, title: "Deployment & Production", duration: "16:45", status: "locked" },
  ]

  const chatMessages = [
    {
      id: 1,
      user: "Emma Wilson",
      avatar: "EW",
      message: "Great explanation of server components! This really clarifies the concept.",
      time: "2 min ago",
      isInstructor: false,
    },
    {
      id: 2,
      user: "Dr. Sarah Chen",
      avatar: "SC",
      message: "Thanks Emma! Remember that server components run on the server and can directly access your database.",
      time: "1 min ago",
      isInstructor: true,
    },
    {
      id: 3,
      user: "Mike Johnson",
      avatar: "MJ",
      message: "Can we use server components with client-side state management?",
      time: "30 sec ago",
      isInstructor: false,
    },
  ]

  const materials = [
    { name: "React Server Components Guide.pdf", size: "2.4 MB", type: "pdf" },
    { name: "Code Examples.zip", size: "1.8 MB", type: "zip" },
    { name: "Additional Resources.md", size: "12 KB", type: "markdown" },
  ]

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In a real app, this would send the message
      setChatMessage("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <Button variant="ghost" onClick={() => onViewChange?.("dashboard")} className="flex items-center space-x-2">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Dashboard</span>
      </Button>

      {/* Course Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{courseData.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <span>{courseData.instructor}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{courseData.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{courseData.duration}</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">{courseData.description}</p>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Button size="lg" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Resume Course</span>
            </Button>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Progress</div>
              <div className="text-lg font-semibold">{courseData.progress}%</div>
            </div>
          </div>
        </div>
        <Progress value={courseData.progress} className="w-full" />
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Video Player */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                <video className="w-full h-full object-cover" poster="/react-server-components-thumbnail.png" controls>
                  <source src="/sample-react-lesson.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                  Lesson 4: React Server Components
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Materials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Course Materials</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="materials" className="w-full">
                <TabsList>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>
                <TabsContent value="materials" className="space-y-4">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">{material.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="notes">
                  <div className="text-center py-8 text-muted-foreground">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your notes will appear here as you take them during the lesson.</p>
                  </div>
                </TabsContent>
                <TabsContent value="assignments">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Build a Server Component</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Create a React Server Component that fetches data from an API and renders it.
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Due: Friday, 11:59 PM</Badge>
                        <Button size="sm">Start Assignment</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lesson Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Content</CardTitle>
              <CardDescription>7 lessons • 2h 17m total</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-80">
                <div className="space-y-1 p-4">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        lesson.status === "current" ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setCurrentLesson(index)}
                    >
                      <div className="flex-shrink-0">
                        {lesson.status === "completed" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : lesson.status === "current" ? (
                          <Play className="h-5 w-5 text-primary" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Live Discussion</span>
                <Badge variant="secondary" className="ml-auto">
                  23 online
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-64 p-4">
                <div className="space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="flex items-start space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{message.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium">{message.user}</p>
                          {message.isInstructor && (
                            <Badge variant="secondary" className="text-xs">
                              Instructor
                            </Badge>
                          )}
                          <p className="text-xs text-muted-foreground">{message.time}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <Separator />
              <div className="p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask a question or share your thoughts..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button size="sm" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
