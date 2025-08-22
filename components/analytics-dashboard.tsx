"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  Users,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Search,
  Filter,
  Download,
  ChevronLeft,
  Calendar,
} from "lucide-react"

interface AnalyticsDashboardProps {
  onViewChange?: (view: "dashboard" | "courses" | "analytics") => void
}

export function AnalyticsDashboard({ onViewChange }: AnalyticsDashboardProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Sample data for charts
  const activityData = [
    { date: "Jan", students: 8400, sessions: 12600 },
    { date: "Feb", students: 8700, sessions: 13200 },
    { date: "Mar", students: 9100, sessions: 14100 },
    { date: "Apr", students: 9800, sessions: 15300 },
    { date: "May", students: 10200, sessions: 16800 },
    { date: "Jun", students: 10800, sessions: 18200 },
  ]

  const completionData = [
    { course: "React Dev", completion: 85, enrolled: 1200 },
    { course: "ML Fundamentals", completion: 72, enrolled: 980 },
    { course: "UI/UX Design", completion: 91, enrolled: 850 },
    { course: "Data Structures", completion: 68, enrolled: 1100 },
    { course: "Python Basics", completion: 88, enrolled: 1350 },
  ]

  const performanceData = [
    { grade: "A (90-100%)", value: 35, color: "#059669" },
    { grade: "B (80-89%)", value: 28, color: "#10b981" },
    { grade: "C (70-79%)", value: 22, color: "#34d399" },
    { grade: "D (60-69%)", value: 10, color: "#fbbf24" },
    { grade: "F (0-59%)", value: 5, color: "#f87171" },
  ]

  const studentsData = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.j@student.edu",
      progress: 85,
      coursesCompleted: 12,
      lastLogin: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@student.edu",
      progress: 72,
      coursesCompleted: 8,
      lastLogin: "1 day ago",
      status: "active",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.d@student.edu",
      progress: 94,
      coursesCompleted: 15,
      lastLogin: "30 min ago",
      status: "active",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.w@student.edu",
      progress: 45,
      coursesCompleted: 4,
      lastLogin: "1 week ago",
      status: "inactive",
    },
    {
      id: 5,
      name: "Emma Brown",
      email: "emma.b@student.edu",
      progress: 88,
      coursesCompleted: 11,
      lastLogin: "5 hours ago",
      status: "active",
    },
  ]

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || student.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <Button variant="ghost" onClick={() => onViewChange?.("dashboard")} className="flex items-center space-x-2">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Dashboard</span>
      </Button>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights into learning performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3</span> new this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+85%</span> increase
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.9%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Student Activity Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Student Activity Over Time</CardTitle>
            <CardDescription>Daily active students and learning sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                students: {
                  label: "Active Students",
                  color: "hsl(var(--chart-1))",
                },
                sessions: {
                  label: "Learning Sessions",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="var(--color-chart-1)"
                    strokeWidth={2}
                    name="Active Students"
                  />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="var(--color-chart-2)"
                    strokeWidth={2}
                    name="Learning Sessions"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Course Completion Rates */}
        <Card>
          <CardHeader>
            <CardTitle>Course Completion Rates</CardTitle>
            <CardDescription>Completion percentage by course</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                completion: {
                  label: "Completion Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={completionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="course" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="completion" fill="var(--color-chart-1)" name="Completion %" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quiz Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance Distribution</CardTitle>
            <CardDescription>Grade distribution across all quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Percentage",
                  color: "hsl(var(--chart-1))",
                },
                grade: {
                  label: "Grade",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ grade, value }) => `${value}%`}
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name, props) => [`${value}%`, props.payload?.grade || name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Student Performance Summary */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Student Performance Overview</CardTitle>
            <CardDescription>Key performance indicators for student success</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Course Progress</span>
                  <span className="text-sm text-muted-foreground">76.8%</span>
                </div>
                <Progress value={76.8} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Assignment Submission Rate</span>
                  <span className="text-sm text-muted-foreground">89.2%</span>
                </div>
                <Progress value={89.2} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Discussion Participation</span>
                  <span className="text-sm text-muted-foreground">64.5%</span>
                </div>
                <Progress value={64.5} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Video Watch Completion</span>
                  <span className="text-sm text-muted-foreground">82.1%</span>
                </div>
                <Progress value={82.1} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Data Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>Monitor individual student progress and engagement</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Courses Completed</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={student.progress} className="w-16" />
                      <span className="text-sm">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.coursesCompleted}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{student.lastLogin}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
