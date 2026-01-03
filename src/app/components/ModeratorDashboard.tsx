import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Filter, Download, AlertTriangle, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data
const flaggedMessages = [
  { id: 1, user: 'user_123', message: 'This is a threatening message...', severity: 'High', time: '5 min ago', status: 'pending' },
  { id: 2, user: 'user_456', message: 'Harassing content detected...', severity: 'Medium', time: '12 min ago', status: 'pending' },
  { id: 3, user: 'user_789', message: 'Mild insult detected...', severity: 'Medium', time: '18 min ago', status: 'reviewed' },
  { id: 4, user: 'user_012', message: 'Potential bullying content...', severity: 'High', time: '25 min ago', status: 'pending' },
  { id: 5, user: 'user_345', message: 'Hate speech detected...', severity: 'High', time: '32 min ago', status: 'blocked' },
];

const trendData = [
  { date: 'Mon', threats: 45, safe: 420, warnings: 12 },
  { date: 'Tue', threats: 38, safe: 445, warnings: 15 },
  { date: 'Wed', threats: 52, safe: 410, warnings: 18 },
  { date: 'Thu', threats: 42, safe: 435, warnings: 10 },
  { date: 'Fri', threats: 35, safe: 455, warnings: 8 },
  { date: 'Sat', threats: 28, safe: 480, warnings: 6 },
  { date: 'Sun', threats: 30, safe: 475, warnings: 7 },
];

const categoryData = [
  { name: 'Threats', value: 145, color: '#ef4444' },
  { name: 'Harassment', value: 98, color: '#f59e0b' },
  { name: 'Insults', value: 76, color: '#eab308' },
  { name: 'Hate Speech', value: 54, color: '#dc2626' },
  { name: 'Safe', value: 2704, color: '#10b981' },
];

export default function ModeratorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold">Moderator Dashboard</span>
              </div>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Messages</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">143</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flagged Messages</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2,704</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Safe Messages</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">95.0%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Safety Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Trend Chart */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Weekly Severity Trends</CardTitle>
              <CardDescription>Message analysis over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="safe" stroke="#10b981" strokeWidth={2} name="Safe" />
                  <Line type="monotone" dataKey="threats" stroke="#ef4444" strokeWidth={2} name="Threats" />
                  <Line type="monotone" dataKey="warnings" stroke="#f59e0b" strokeWidth={2} name="Warnings" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Breakdown by message category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Flagged Messages List */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Flagged Messages</CardTitle>
                <CardDescription>Messages pending moderation review</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severity</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {flaggedMessages.map((msg) => (
                <div key={msg.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{msg.user}</span>
                      <Badge variant={msg.severity === 'High' ? 'destructive' : 'default'}>
                        {msg.severity}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{msg.message}</p>
                    <Badge variant={msg.status === 'blocked' ? 'destructive' : msg.status === 'reviewed' ? 'secondary' : 'outline'} className="text-xs">
                      {msg.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">Review</Button>
                    <Button size="sm" variant="destructive">Block</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
